import { Controlled as CodeMirror } from "react-codemirror2";
import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { Box } from "@chakra-ui/core/dist";
import debounce from "lodash.debounce";

// import { ssgToOASParser } from "tssg/dist/parsers/ssg";
// @ts-ignore

import SsgToOASParser from "@tssg/syntax-parser/dist/transformer/index";
// @ts-ignore
import SsgASTParser from "@tssg/syntax-parser/dist/parser/parser";
// @ts-ignore
import OASToMongoose from "@tssg/syntax-parser/dist/addons/mongoose/mongoose-transformer";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/search/match-highlighter";
import "codemirror/addon/mode/simple";
import "codemirror/mode/javascript/javascript";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import LoadExamples from "./LoadExamples";

const ssgToOASParser = SsgToOASParser.parser;
const ssgASTParser = SsgASTParser.parse;

type TssgEditorProps = {
  setParsedData?: any;
  width: number;
  height: number;
};

const savedValue = window.localStorage.getItem("savedValue");
const defaultValue = `
Schemas {
  BaseUser {
  	_id: string,
    name: string,
    email: string,
    isActive: boolean,
    profileImageUrl: string,
  }
  
  Employee extends BaseUser {
  	department: string,
    roles: string[],
  }
  
  Manager extends BaseUser, Employee {
  	accessList: {
    	type: string,
        active: boolean,
    }[]
  }
}
`;
const savedOrDefaultValue = savedValue || defaultValue;

export const TssgEditor = (props: TssgEditorProps): ReactElement => {
  const { setParsedData, width: wWidth, height: wHeight } = props;

  const [value, setValue] = useState(savedOrDefaultValue);
  const [parsedError, setParsedError] = useState("" as any);

  const navHeight = 80;

  const parseAndSetValue = useCallback(
    debounce(
      (value: string) => {
        if (!value) return;
        try {
          const parsedSpec = ssgToOASParser(value);
          const parsedAst = ssgASTParser(value);
          const parsedMongooseSchemas = OASToMongoose(parsedSpec);
          setParsedData({ parsedSpec, parsedAst, parsedMongooseSchemas });
          window.localStorage.setItem("savedValue", value);
          setParsedError("");
        } catch (e) {
          setParsedError(e.message);
        }
      },
      1000,
      { trailing: true }
    ),
    []
  );

  const resetToDefault = () => {
    window.localStorage.setItem("savedValue", defaultValue);
    setValue(defaultValue);
  };

  useEffect(() => {
    parseAndSetValue(value);
  }, [value]);

  return (
    <Box position={"relative"}>
      {parsedError && (
        <ErrorBar
          error={parsedError}
          {...{
            position: "absolute",
            left: 0,
            bottom: 0,
            zIndex: 999,
            width: "100%",
            color: "white",
          }}
        />
      )}
      <Box position="absolute" top={2} right={6} style={{ zIndex: 999 }}>
        {/* <Stack direction={"row"}>
          <Button
            type="button"
            size={"sm"}
            variantColor={"blue"}
            onClick={resetToDefault}
          >
            <Icon name="repeat" mr={2} /> Reset
          </Button>
          <LoadExamples
            onLoadExample={(value): void => {
              setValue(value);
            }}
          />
        </Stack> */}
      </Box>
      <CodeMirror
        editorDidMount={(codeMirror) => {
          codeMirror.setSize(wWidth / 2, wHeight - navHeight);
          // @ts-ignore
        }}
        className={"tssg-editor"}
        value={value}
        options={{
          lineWrapping: true,
          lineNumbers: true,
          theme: "material",
          smartIndent: false,
          autoCloseBrackets: true,
          highlightSelectionMatches: true,
          matchBrackets: true,
          mode: "javascript",
        }}
        onBeforeChange={(editor, data, value) => {
          setValue(value);
        }}
        onChange={(editor, data, value) => {}}
      />
    </Box>
  );
};

type ErrorBarProps = {
  error: string;
};

const ErrorBar = (props: ErrorBarProps): ReactElement => {
  const { error, ...rest } = props;
  console.log(error);
  return (
    <Box padding={2} bg={"orange.400"} {...rest}>
      {error || ""}
    </Box>
  );
};
