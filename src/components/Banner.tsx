import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["10rem", "15rem", "15rem", "21rem"]}
      bgImage="url('images/banner.jpg')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Flex
        w="100%"
        mx="auto"
        align="center"
        justify={["center", "space-between"]}
        px={["1rem", "2.5rem", "4rem", "5rem"]}
      >
        <Box>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl"]}
          >
            5 continentes, <br />
            infinitas possibilidades
          </Heading>
          <Text
            color="gray.300"
            mt="1.25rem"
            maxW={["100%", "100%", "100%", "550px"]}
            fontSize={["0.8rem", "xl"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          src="images/airplane.svg"
          alt="Avião amarelo"
          transform="translateY(48px) rotate(3deg)"
          ml="2rem"
        >

        </Image>
      </Flex>

    </Flex>
  );
}