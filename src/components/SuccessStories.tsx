import { Carousel } from '@mantine/carousel';
import { Avatar, Card, Text, Title, Container, Group, Grid, Box } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import '@mantine/carousel/styles.css';

const stories = [
  {
    name: 'Lucky Shrestha',
    position: 'Cloud Engineer',
    company: 'Sustainable Solutions Pvt. Ltd.',
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754285383/final_inkedin_s5cebm.jpg',
  },
  {
    name: 'Anish Chaulagain',
    position: 'Software Engineer',
    company: 'F1Soft International Pvt. Ltd.',
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754291630/anish_ubmmme.jpg',
  },
  {
    name: 'Aashish Shrestha',
    position: 'Cloud Engineer',
    company: 'TechAxis',
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754285383/final_inkedin_s5cebm.jpg',
  },
  {
    name: 'Rakesh Shrestha',
    position: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
  },
];

const teamAvatars = [
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754285383/final_inkedin_s5cebm.jpg',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754291630/anish_ubmmme.jpg',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/devops_eanbev.png',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/mern_bcoan2.png',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/python_yf5hda.png',
];

export function SuccessStories() {
  return (
    <section className="bg-blue-50 py-16">
      <Container>
        <Grid gutter="xl">
          {/* Left Side: Title and Avatars */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Title order={2} className="text-blue-900 font-bold">Success Stories</Title>
            <Text className="text-gray-700 mt-2">
              Our team can assist you in transforming your skill through latest tech capabilities to stay ahead of the competition.
            </Text>
            <Group mt="md">
              <Avatar.Group spacing="sm">
                {teamAvatars.map((image, i) => (
                  <Avatar key={i} src={image} radius="xl" />
                ))}
              </Avatar.Group>
            </Group>
          </Grid.Col>

          {/* Right Side: Carousel */}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Carousel
              slideSize="50%"
              slideGap="md"
              withIndicators
              nextControlIcon={<IconArrowRight size={20} />}
              previousControlIcon={<IconArrowLeft size={20} />}
            >
              {stories.map((story, index) => (
                <Carousel.Slide key={index}>
                  <Card shadow="sm" padding="lg" radius="md" className="flex items-center gap-4">
                    <img src={story.image} className='h-20 w-20 rounded-full'/>
                    <Box>
                      <Text fw={600}>{story.name}</Text>
                      <Text size="sm" c="gray">{story.position}</Text>
                      <Text size="sm" c="blue" className="mt-1">Working at: {story.company}</Text>
                    </Box>
                  </Card>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}