import { Avatar, Card, Text, Title, Container, Group, Grid, Box } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowLeft, IconArrowRight, IconQuote } from '@tabler/icons-react';
import '@mantine/carousel/styles.css';

const testimonials = [
  {
    name: 'Lucky Shrestha',
    role: 'Cloud Engineer',
    testimonial: 'The training at our institution was top-notch, providing me with the practical skills needed to excel in the industry. The hands-on approach and expert instructors were incredibly valuable.',
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754285383/final_inkedin_s5cebm.jpg',
  },
  {
    name: 'Anish Chaulagain',
    role: 'Software Engineer',
    testimonial: 'I highly recommend this course. The comprehensive curriculum and dedicated support from the team helped me secure a position as a Software Engineer. The career guidance was a huge plus.',
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754291630/anish_ubmmme.jpg',
  },
  {
    name: 'Rakesh Shrestha',
    role: 'Cloud Engineer',
    testimonial: 'The project-based learning gave me a deep understanding of modern cloud technologies and helped me build a portfolio that got me my dream job. I am very grateful for the experience.',
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754285383/final_inkedin_s5cebm.jpg',
  },
  {
    name: 'Riwaj Shrestha',
    role: 'Frontend Developer',
    testimonial: 'The hands-on coding sessions and personalized feedback were a game-changer. I feel fully prepared and confident in my role as a Frontend Developer thanks to this program.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
  },
];

const studentAvatars = [
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754285383/final_inkedin_s5cebm.jpg',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754291630/anish_ubmmme.jpg',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/devops_eanbev.png',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/mern_bcoan2.png',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/python_yf5hda.png',
];

export function StudentVoice() {
  return (
    <Box className="bg-blue-500 py-16 text-white">
      <Container>
        <Grid gutter="xl" align="center">
          {/* Left Side: Title and Avatars */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Title order={2} className="text-white text-3xl font-bold ">Our Student Voice</Title>
            <Text className="text-gray-300 mt-2">
              Our students and graduates talk about their experience and career transformation.
            </Text>
            <Group mt="md">
              <Avatar.Group spacing="sm">
                {studentAvatars.map((image, i) => (
                  <Avatar key={i} src={image} radius="xl" />
                ))}
              </Avatar.Group>
            </Group>
          </Grid.Col>

          {/* Right Side: Carousel */}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Carousel
              slideSize={{ base: '100%', sm: '50%', md: '50%' }}
              slideGap="md"
              withIndicators
              nextControlIcon={<IconArrowRight size={20} color="black" />}
              previousControlIcon={<IconArrowLeft size={20} color="black" />}
            >
              {testimonials.map((testimonial, index) => (
                <Carousel.Slide key={index}>
                  <Card shadow="sm" padding="lg" radius="md" className="bg-white text-black h-full flex flex-col justify-between">
                    <Box className="flex flex-col justify-between h-full">
                      <Box>
                        {/* This icon has replaced the "99" */}
                        <Text className="text-blue-500 text-6xl font-bold leading-none mb-2">“</Text>
                        <Text className="text-gray-700">{testimonial.testimonial}</Text>
                        <Text component="a" href="#" className="text-blue-500 font-semibold mt-2 block">Read More</Text>
                      </Box>
                      <Group className="mt-6">
                        <Avatar src={testimonial.image} size={60} radius="xl" />
                        <Box>
                          <Text fw={600}>{testimonial.name}</Text>
                          <Text size="sm" c="gray">{testimonial.role}</Text>
                        </Box>
                      </Group>
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