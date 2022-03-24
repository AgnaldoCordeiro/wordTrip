import { Box, Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      bgImage={"background.svg"}
      h="335px"
      mx="auto"
      mt="4"
      px="6"
      align={"center"}
    >
      <SimpleGrid columns={2} spacing={2}>
        <Box
          maxWidth={600}
          px={[5, 10, 20]}
          py={["1", "5", "10"]}
          margin={["1", "5", "10"]}
        >
          <Text color={"gray.100"} fontSize={["medium", "2xl", "3xl"]}>
            5 Continentes, <br /> infinitas possibilidades.
          </Text>
          <Text
            py={[1, 5, 8]}
            color={" #DADADA"}
            fontSize={["xs", "sm", "2x1"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Box>
          <Image src="airplane.svg" alt="airplane" mt={20} px={20} />
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
