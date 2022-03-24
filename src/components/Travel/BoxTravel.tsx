import { Box, Image, Text } from "@chakra-ui/react";

interface BoxTravelProps {
  name: string;
  image: string;
}

export function BoxTravel({ name, image }: BoxTravelProps) {
  return (
    <Box
      p={8}
      m={2}
      display="flex"
      alignItems="center"
      flexDirection={"column"}
    >
      <Image src={image} alt={image} py={2} />
      <Text>{name}</Text>
    </Box>
  );
}
