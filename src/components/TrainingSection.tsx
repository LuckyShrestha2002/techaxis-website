import { Box, Container, Grid, Title, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

const mernTrainingImages = [
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754305978/merntraining_gv94ku.webp',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754308118/devops2_tz3oad.webp',
  // Add more image URLs here if you have them
];

export function MernTrainingSection() {
  return (
    <Box className="bg-gray-50 py-16">
      <Container size="xl">
        <Grid gutter="xl" align="center">
          {/* Left Column: Image Slider */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Box>
              <Title order={3} className="text-2xl font-bold text-gray-800 mb-10">
                Training Session At TechAxis
              </Title>
              <Carousel
                slideSize="100%"
                slideGap="md"
                withControls={true}
                withIndicators={true}
                className="rounded-lg shadow-xl overflow-hidden"
                styles={{
                  control: {
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    border: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    },
                  },
                }}
              >
                {mernTrainingImages.map((image, index) => (
                  <Carousel.Slide key={index}>
                    <img
                      src={image}
                      alt={`MERN Stack Training ${index + 1}`}
                      className="w-full h-[500px] object-cover rounded-lg"
                    />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </Box>
          </Grid.Col>

          {/* Right Column: Static Project Overview */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Box className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col justify-center items-center text-center">
              <Title order={3} className="text-2xl font-bold text-gray-800">
                Project Overview
              </Title>
              <Text size="md" className="mt-4 text-gray-600">
                Explore a variety of projects in MERN Stack, DevOps, and more. Our training focuses on practical, hands-on experience to help you build a professional portfolio and master the skills needed for today's tech industry.
              </Text>
              <Text size="md" className="mt-4 text-gray-600">
                Each course is designed to take you from a beginner to a confident professional through real-world project development.
              </Text>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}