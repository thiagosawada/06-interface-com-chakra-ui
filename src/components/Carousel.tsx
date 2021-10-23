import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Carousel() {
  return (
    <Flex
      w="100%"
      maxWidth="1240px"
      h={["250px", "450px"]}
      mx="auto"
      mb={["1.25rem", "2.5rem"]}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: "100%", flex: 1 }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            direction="column"
            align="center"
            justify="center"
            textAlign="center"
            bgImage="url('/images/europe.png')"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Link href="/continents/europe">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Europa
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["0.5rem", "1rem"]}
                >
                  O continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </Flex>
  );
}