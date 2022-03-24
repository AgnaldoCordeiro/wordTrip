import { Box, Flex, Stack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { Travel } from "../components/Travel";
import { api } from "../services/api";

export interface ContinentProps {
  id: number;
  name: string;
  slogan: string;
  thumb: string;
  slug: string;
}

interface HomeProps {
  continents: ContinentProps[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex h="100vh" flexDirection={"column"}>
      <Header />
      <Banner />
      <Travel />
      <Divider />
      <Box
        mx={{
          base: "0",
          sm: "24px",
          md: "50px",
          lg: "50px",
          xl: "100px",
        }}
      >
        <Carousel data={continents} />
      </Box>
    </Flex>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/continents");

  return {
    props: {
      continents: response.data,
    },
  };
};
