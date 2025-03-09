import React from 'react'
import { useState } from "react";
import { ChakraProvider, Box, Textarea, Button, VStack, Text, Heading, Container } from "@chakra-ui/react";



const AIDisplay = () => {
  return (
    <ChakraProvider>
      <Container centerContent minH="100vh" bg="#F3F4F6" p={6}>
        <Box bg="white" p={6} rounded="lg" shadow="lg" w="100%" maxW="lg">
          <VStack spacing={4}>
            <Heading size="lg" color="#1E3A8A">AI Workout Planner</Heading>
            <Textarea
              placeholder="Enter workout preferences (e.g., muscle gain, 3 days/week)..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              borderColor="gray.300"
              focusBorderColor="#2563EB"
            />
            <Button bg="#2563EB" color="white" w="full" _hover={{ bg: "#1D4ED8" }} onClick={generateResponse}>
              Generate Workout
            </Button>
            <Box p={3} w="full" bg="gray.50" borderRadius="md" border="1px" borderColor="gray.300">
              <Text color="#1F2937" whiteSpace="pre-wrap">{output || "Your workout plan will appear here..."}</Text>
            </Box>
          </VStack>
        </Box>
      </Container>
    </ChakraProvider>

  )
}

export default AIDisplay