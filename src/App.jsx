import { useState } from 'react'
import { Box, Textarea, Button, VStack, Text, Heading, Flex, Container, Spinner, Center } from "@chakra-ui/react";
import { Mistral } from '@mistralai/mistralai';
import Footer from './Footer';

function App() {
  const [userInput, setUserInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const client = new Mistral({apiKey: import.meta.env.VITE_MISTRAL_API_KEY});

  async function generateResponse () {
    if (!userInput.trim()) {
      setOutput("Please enter instructions.");
      return;
    }

    try {
      setLoading(true);
    const response = await client.chat.complete({
      model: 'mistral-large-latest',
      messages: [
        {
          role: "system",
          content: "You are an experienced self improvement coach who excels in giving advice that helps people improve their lives drastically. Give it in the format as if we are having a converstion, but keep the format proper with paragraphs. Keep responses short and to the point unless asked for a longer response"
        },
        {role: 'user', content: userInput}],
    });

    setOutput(response.choices[0].message.content);

    setLoading(false);
    } catch (error) {
      console.error("Error:",error);
    } 
    
  };


  return (
  <div>
    <Container
    bg="#171219" 
    width="100vw"
    height="100vh"
    >
      <Flex 
        bg="#171219" 
        height="100vh" 
        justify="center" 
        align="center" 
        p={4}
      >
        <Box bg="#1E1B25" p={8} rounded="lg" shadow="xl" w="90%" maxW="600px" h="80vh" display="flex" flexDirection="column">
          <VStack spacing={6} flex="1">
            <Heading size="lg" color="white">Self Improvement Coach</Heading>
            <Textarea
              placeholder="What you would like guidance on?"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              borderColor="gray.500"
              focusBorderColor="#2563EB"
              bg="#2A2733"
              color="white"
              flex="1"
              minH="120px"
              maxH="120px"
            />
            <Button bg="#22558f" color="white" w="full" _hover={{ bg: "#22558f" }} onClick={generateResponse}>
              Generate Response
            </Button>
            {
              loading ? (
                <Center w="full" h="20rem">
                  <Spinner size="xl" color='white'/>
                </Center>
              ) : (
              <Box p={4} w="full" flex="2" bg="#2A2733" borderRadius="md" border="1px" borderColor="gray.500" overflowY="scroll">
                            <Text color="white" whiteSpace="pre-wrap" maxH="120px">
                              {output || "Your response will appear here..."}
                            </Text>
              </Box>
              )
            }
            
          </VStack>
        </Box>
      </Flex>
    </Container>
    <Footer/>
  </div>
  )
}

export default App
