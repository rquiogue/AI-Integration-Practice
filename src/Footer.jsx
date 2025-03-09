import { Box, Text, Link, HStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
      <Box 
        as="footer" 
        w="100%" 
        p={4} 
        bg="#171219" 
        color="white" 
        textAlign="center"
        position="absolute"
        bottom="0"
      >
        <Text mb={2}>Made by Ryan Quiogue</Text>
        <HStack spacing={4} justify="center">
          <Link href="mailto:rquiogue17@gmail.com" isExternal>
            <Icon as={FaEnvelope} boxSize={5} />
          </Link>
          <Link href="https://github.com/rquiogue" isExternal>
            <Icon as={FaGithub} boxSize={5} />
          </Link>
          <Link href="https://www.linkedin.com/in/ryan-quiogue-538556249/" isExternal>
            <Icon as={FaLinkedin} boxSize={5} />
          </Link>
        </HStack>
      </Box>
    );
}