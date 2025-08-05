import { Box, Container, Grid, Title, Text, Card, Group, Anchor, Badge } from '@mantine/core';

const blogPosts = [
  {
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754360508/cyber_lebmiz.jpg',
    category: 'CyberSecurity',
    title: 'Top Cybersecurity Courses to Launch Your Career in 2025',
    date: '24 Jan 2025',
  },
  {
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754360508/ethical_jgkuk6.jpg',
    category: 'Ethical Hacking',
    title: 'Ethical Hacking vs Penetration Testing: Whats the Difference?',
    date: '18 Feb 2025',
  },
  {
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754360508/digital_dl0nmk.jpg',
    category: 'Digital Marketing',
    title: 'Digital Marketing Best Practices: Actionable Strategies for Sustainable Growth',
    date: '12 Mar 2025',
  },
];

export function BlogSection() {
  return (
    <Box className="bg-gray-50 py-16">
      <Container size="xl">
        {/* Section Header */}
        <Group justify="space-between" className="mb-8">
          <Title order={2} className="text-3xl font-bold text-gray-800">
            Read Some Our <b>News and Blogs</b>
          </Title>
          <Anchor href="#" size="sm" className="font-semibold text-blue-600 hover:underline">
            View All
          </Anchor>
        </Group>

        {/* Blog Posts Grid */}
        <Grid gutter="xl">
          {blogPosts.map((post, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <Card shadow="md" padding="lg" radius="md" withBorder className="h-full flex flex-col transition-transform duration-200 hover:scale-[1.02]">
                <Card.Section>
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                </Card.Section>

                <Box className="mt-4">
                  <Badge color="blue" variant="light" size="sm" className="mb-2">
                    {post.category}
                  </Badge>
                  <Title order={4} className="text-xl font-semibold leading-snug">
                    {post.title}
                  </Title>
                </Box>

                <Group justify="space-between" className="mt-auto pt-4">
                  <Text size="sm" color="dimmed">
                    {post.date}
                  </Text>
                </Group>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}