import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface CategoryProps {
  icon: string;
  text: string;
}

export function Category({ icon, text }: CategoryProps) {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  })

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isMobile ? (
        <Text color="yellow.highlight" fontSize="4xl" mr="0.5.5rem">·</Text>
      ) : (
        <Image src={`images/${icon}.svg`} w="85px" h="85px" mb="1.5rem"/>
      )}
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>
        {text}
      </Text>
    </Flex>
  );
}