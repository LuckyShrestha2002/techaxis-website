import { Avatar, Card, Text, Title, Container, Grid, Box, Group } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import '@mantine/carousel/styles.css';

// Dummy data for the student testimonials
const testimonials = [
  {
    text: 'It was best and I got the opportunity to learn what really devops is in the field of tech and how devops plays its role in delivering the outcomes to the end users.',
    name: 'Amish Thapa',
    role: 'DevOps',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop',
  },
  {
    text: 'Even though the training session was for a short period of time, I gained a lot of knowledge regarding the course. With all the teachings from the training and the additional materials given, which will go a long way for further references and re-reading, it was worth the invested time.',
    name: 'Ichhita Bajracharya',
    role: 'Python with Data Science',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop',
  },
  {
    text: 'The training at our institution was top-notch, providing me with the practical skills needed to excel in the industry. The hands-on approach and expert instructors were incredibly valuable.',
    name: 'Santosh Khanal',
    role: 'Quality Assurance Engineer',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop',
  },
];

// Sample avatars for the group
const studentAvatars = [
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/santosh_khanal_t0g5a5.jpg',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/dipendra_bk_h5r2h0.jpg',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/devops_eanbev.png',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/mern_bcoan2.png',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/python_yf5hda.png',
];

export function StudentTestimonials() {
  return (
    <Box className="bg-blue-800 py-16">
      <Container size="xl">
        <Grid gutter="xl" align="center">
          {/* Left Column: Title, Description, and Avatars */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Box className="text-white">
              <Title order={2} className="text-4xl font-bold">
                Our Student Voice
              </Title>
              <Text size="md" className="mt-4 max-w-sm">
                Our team can assist you in transforming your skill through latest tech capabilities to stay ahead of the competition.
              </Text>
              <Group mt="xl">
                <Avatar.Group spacing="sm">
                  {studentAvatars.map((image, i) => (
                    <Avatar key={i} src={image} radius="xl" />
                  ))}
                </Avatar.Group>
              </Group>
            </Box>
          </Grid.Col>

          {/* Right Column: Testimonial Carousel */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Carousel
              slideSize={{ base: '100%', md: '50%' }}
              slideGap="md"
              withIndicators
              loop
              nextControlIcon={<IconArrowRight size={20} />}
              previousControlIcon={<IconArrowLeft size={20} />}
            >
              {testimonials.map((testimonial, index) => (
                <Carousel.Slide key={index}>
                  <Card shadow="sm" padding="lg" radius="lg" className="bg-white h-full">
                    <Box>
                      {/* Quote icon can be an SVG or a styled text */}
                      <Text className="text-5xl font-bold text-blue-500 opacity-20">''</Text>
                      <Text size="sm" className="mt-2 text-gray-700">
                        {testimonial.text}
                      </Text>
                      <Text component="a" href="#" className="mt-2 text-blue-500 font-semibold hover:underline">
                        Read More
                      </Text>
                      <Box className="flex items-center mt-6">
                        <Avatar src={testimonial.image} size={50} radius="xl" />
                        <Box className="ml-4">
                          <Title order={5} className="font-semibold text-sm">{testimonial.name}</Title>
                          <Text size="xs" c="dimmed">{testimonial.role}</Text>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}