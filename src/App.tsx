import React, { ReactElement, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/core";
import ReactJson from "react-json-view";

import "./index.css";

import { Icon, useDisclosure } from "@chakra-ui/core/dist";

import { HowToGuideModal } from "./HowToGuideModal";
import { Header } from "./components/Header";
import { TssgEditor } from "./components/TssgEditor";

// @ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard";

export const App = (): ReactElement => {
  const navHeight = 80;
  const [parsedData, setParsedData] = useState<any>({});
  const [jsonCopied, setJsonCopied] = useState(false);

  useEffect(() => {
    setJsonCopied(false);
  }, [parsedData.parsedSpec]);

  const wHeight = window?.innerHeight;
  const wWidth = window?.innerWidth;
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Box h={navHeight} position={"relative"}>
        <Header
          rightSection={
            <Button onClick={onOpen} size={"md"}>
              <Icon name={"info-outline"} mr={2} /> How to use?
            </Button>
          }
        />
      </Box>
      <Flex>
        <Box flex={1}>
          <TssgEditor
            setParsedData={setParsedData}
            width={wWidth}
            height={wHeight}
          />
        </Box>
        <Box flex={1} bg={"white"} color={"white"} position={"relative"}>
          <Flex flexDir="column">
            <Tabs bg="gray.900" variantColor="yellow">
              <TabList>
                <Tab>Open API Spec</Tab>
                <Tab>AST</Tab>
                <Tab>Meta</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Box pos="relative">
                    <Box pos="absolute" right="10px" top="10px">
                      <CopyToClipboard
                        text={JSON.stringify(parsedData.parsedSpec, null, 2)}
                        onCopy={() => setJsonCopied(true)}
                      >
                        <Button size="sm" variant="solid" variantColor="blue">
                          {jsonCopied ? "Copied" : "Copy to clipboard"}
                        </Button>
                      </CopyToClipboard>
                    </Box>
                    <Box
                      as="pre"
                      style={{
                        height: wHeight - navHeight - 42,
                        width: wWidth / 2,
                        overflowY: "scroll",
                      }}
                    >
                      {JSON.stringify(parsedData.parsedSpec, null, 2)}
                    </Box>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box>
                    <ReactJson
                      src={parsedData.parsedAst ?? {}}
                      displayDataTypes={false}
                      enableClipboard={false}
                      displayObjectSize={false}
                      indentWidth={2}
                      theme="tomorrow"
                      style={{
                        position: "absolute",
                        height: wHeight - navHeight - 42,
                        width: "100%",
                        overflowY: "scroll",
                      }}
                    />
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box>
                    <ReactJson
                      src={{
                        Schemas: parsedData.parsedAst?.schemas ?? {},
                        RequestBodies:
                          parsedData.parsedAst?.requestBodies ?? {},
                        Parameters: parsedData.parsedAst?.parameters ?? {},
                        Comments: parsedData.parsedAst?.comments ?? {},
                        Paths: parsedData.parsedAst?.paths ?? {},
                      }}
                      displayDataTypes={false}
                      enableClipboard={false}
                      displayObjectSize={false}
                      indentWidth={2}
                      theme="tomorrow"
                      style={{
                        position: "absolute",
                        height: wHeight - navHeight - 42,
                        width: "100%",
                        overflowY: "scroll",
                      }}
                    />
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Box>
      </Flex>

      <HowToGuideModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
