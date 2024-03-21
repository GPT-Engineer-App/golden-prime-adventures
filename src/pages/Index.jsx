import React from "react";
import { Box, Heading, Text, Image, Stack, Container, SimpleGrid, Button, Icon } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const tours = [
    {
      title: "Maasai Mara Safari",
      description: "Experience the incredible wildlife of the Maasai Mara National Reserve.",
      image: "https://images.unsplash.com/photo-1477949775154-d739b82400b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWFzYWklMjBtYXJhJTIwc2FmYXJpfGVufDB8fHx8MTcxMDk4ODIxN3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Mount Kenya Trekking",
      description: "Embark on a thrilling trek to the summit of Mount Kenya.",
      image: "https://images.unsplash.com/photo-1571636689955-99b9376505cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudCUyMGtlbnlhJTIwdHJla2tpbmd8ZW58MHx8fHwxNzEwOTg4MjE3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Diani Beach Getaway",
      description: "Relax and unwind on the pristine white sands of Diani Beach.",
      image: "https://images.unsplash.com/photo-1708119063168-4785d1359824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaWFuaSUyMGJlYWNoJTIwa2VueWF8ZW58MHx8fHwxNzEwOTg4MjE3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box>
      {/* Header */}
      <Box bg="teal.500" py={8}>
        <Container maxW="container.lg">
          <Heading as="h1" size="xl" color="white" mb={4}>
            Golden Prime Adventures
          </Heading>
          <Text fontSize="xl" color="white">
            Discover the beauty of Kenya with us
          </Text>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxW="container.lg" py={12}>
        <Heading as="h2" size="xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg" mb={8}>
          Golden Prime Adventures is your premier tour and travel company based in Kenya. We offer unforgettable experiences and adventures across the stunning landscapes of Kenya.
        </Text>
        <Image src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxrZW55YSUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3MTA5ODgyMTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kenya Landscape" mb={8} />
        <Text fontSize="lg">Our team of experienced guides and travel experts are dedicated to providing you with exceptional service and creating memories that will last a lifetime.</Text>
      </Container>

      {/* Tours Section */}
      <Container maxW="container.lg" py={12}>
        <Heading as="h2" size="xl" mb={8}>
          Our Tours
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {tours.map((tour, index) => (
            <Box key={index} borderWidth={1} borderRadius="lg" overflow="hidden">
              <Image src={tour.image} alt={tour.title} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {tour.title}
                </Heading>
                <Text>{tour.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Contact Section */}
      <Container maxW="container.lg" py={12}>
        <Heading as="h2" size="xl" mb={8}>
          Contact Us
        </Heading>
        <Stack spacing={4} mb={8}>
          <Text>
            <Icon as={FaPhone} mr={2} />
            Phone: +254 123 456789
          </Text>
          <Text>
            <Icon as={FaEnvelope} mr={2} />
            Email: info@goldenprimeadventures.com
          </Text>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<FaFacebook />} colorScheme="facebook">
            Facebook
          </Button>
          <Button leftIcon={<FaTwitter />} colorScheme="twitter">
            Twitter
          </Button>
          <Button leftIcon={<FaInstagram />} colorScheme="pink">
            Instagram
          </Button>
        </Stack>
      </Container>

      {/* Footer */}
      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Text>&copy; {new Date().getFullYear()} Golden Prime Adventures. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
