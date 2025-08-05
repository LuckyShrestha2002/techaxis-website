import { Box, Container, Grid, Title, Text, Button, Group } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

const specialitiesList = [
  'Latest IT Technologies available',
  'Adaptive teaching methods',
  'Modern adaptive teaching methods',
];

// Array of images for the grid
const specialityImages = [
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754300142/mern1_ov5fbd.png',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754301214/devops2_bp9vqx.png',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754301067/aws2_w1axqj.png',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754300158/python_yf5hda.png',
];

export function Specialities() {
  return (
    <Box className="bg-white py-16">
      <Container size="xl">
        <Grid gutter="xl" align="center">
          {/* Left Column: Text Content and Button */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box className="max-w-lg">
              <Title order={2} className="text-3xl font-bold">
                Our Specialities
              </Title>
              <Text size="lg" c="dimmed" className="mt-2">
                Browse our professional IT Courses
              </Text>

              <Box className="mt-8 space-y-4">
                {specialitiesList.map((speciality, index) => (
                  <Group key={index} className="space-x-2">
                    <IconCircleCheck size={20} className="text-blue-500" />
                    <Text size="md">{speciality}</Text>
                  </Group>
                ))}
              </Box>

              <Button
                component="a"
                href="#"
                size="md"
                radius="xl"
                className="mt-8 bg-blue-500 hover:bg-blue-600"
              >
                Browse Our Courses
              </Button>
            </Box>
          </Grid.Col>

          {/* Right Column: Image Grid */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Grid gutter="md">
              {specialityImages.map((image, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
                  <img
                    src={image}
                    alt={`Speciality image ${index + 1}`}
                    className="w-full h-56 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}