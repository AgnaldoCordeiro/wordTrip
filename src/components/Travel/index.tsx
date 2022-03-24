import { Flex } from "@chakra-ui/react";
import { BoxTravel } from "./BoxTravel";

export function Travel() {
  return (
    <Flex align={"center"} justify={"center"}>
      <BoxTravel name={"vida noturna"} image={"cocktail 1.svg"} />
      <BoxTravel name={"praia"} image={"surf 1.svg"} />
      <BoxTravel name={"moderno"} image={"building 1.svg"} />
      <BoxTravel name={"clássico"} image={"museum 1.svg"} />
      <BoxTravel name={"e mais..."} image={"earth 1.svg"} />
    </Flex>
  );
}
