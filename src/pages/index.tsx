import { Box, Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Categories } from "../components/Categories";

export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <Box
        w={["4rem", "6rem"]}
        my={["2.5rem", "5rem"]}
        mx="auto"
        h="2px"
        bg="gray.700"
      />

      <Heading
        mb={["1.25rem", "3.5rem"]}
        textAlign="center"
        fontWeight="500"
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa? <br />
        Então escolha o seu continente
      </Heading>
    </>
  )
}
