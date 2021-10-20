import { Box, Flex, Icon, IconButton, Image, } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiChevronLeft } from "react-icons/fi"

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      bg="white"
      w="100%"
      h={["3.125rem", "5rem", "6.25rem"]}
      px={["1rem", "1.5rem"]}
      align="center"
      justify="space-between"
    >
      <Box w="2.5rem" minWidth="fit-content">
        {asPath !== "/" && (
          <IconButton
            aria-label="Go back"
            icon={<Icon as={FiChevronLeft} />}
            fontSize={24}
            variant="unstyled"
            mr="0.5rem"
          />
        )}
      </Box>
      <Box>
        <Image
          w={["60%", "100%"]}
          height="auto"
          src="/images/logo.svg"
          alt="logo"
          mx="auto"
        />
      </Box>
      <Box w="2.5rem"></Box>
    </Flex>
  );
}