import { Flex } from "@chakra-ui/react";
import Swiper from "swiper";
import { CarouselItem } from "./Carousel";

export function Carousel() {
  return (
    <Flex h={"450px"} mx={"auto"} maxWidth={1248} color={"gray.50"}>
      <CarouselItem />
    </Flex>
  );
}
