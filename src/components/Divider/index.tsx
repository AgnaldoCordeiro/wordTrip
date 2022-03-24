import { Flex, Image, Text } from "@chakra-ui/react";

export function Divider() {
  return (
    <Flex display={"flex"} align={"center"} flexDirection={"column"}>
      <Image src="Divider.svg" alt="Divider" py={8} />
      <Text fontSize={36} align={"center"} fontWeight={500} py={5}>
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>
    </Flex>
  );
}
