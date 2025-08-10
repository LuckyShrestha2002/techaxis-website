import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Image, Text, Title, Button, Group, Center, Box, Skeleton, SimpleGrid, Stack } from '@mantine/core';
import { IconArrowLeft, IconClock, IconUser, IconCoin } from '@tabler/icons-react';

interface Course {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  duration: number; // number type
  instructor: string;
}

export function CourseDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/courses/${id}`);
        if (!response.ok) {
          throw new Error('Course not found.');
        }
        const data = await response.json();
        data.duration = Number(data.duration);
        setCourse(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <Center style={{ height: '100vh' }}>
        <Container size="md">
          <Skeleton height={300} mb="xl" />
          <Group grow mb="md">
            <Skeleton height={60} />
            <Skeleton height={60} />
          </Group>
          <Skeleton height={150} />
        </Container>
      </Center>
    );
  }

  if (error) {
    return (
      <Center style={{ height: '100vh' }}>
        <Container size="sm" style={{ textAlign: 'center' }}>
          <Text size="xl" color="red">{error}</Text>
          <Button onClick={() => navigate(-1)} mt="md">Go Back</Button>
        </Container>
      </Center>
    );
  }
  
  if (!course) {
    return (
      <Center style={{ height: '100vh' }}>
        <Container size="sm" style={{ textAlign: 'center' }}>
          <Text size="xl">Course not found.</Text>
          <Button onClick={() => navigate(-1)} mt="md">Go Back</Button>
        </Container>
      </Center>
    );
  }

  return (
    <Container size="xl" py="xl">
      <Button 
        variant="subtle" 
        leftSection={<IconArrowLeft size={14} />} 
        onClick={() => navigate(-1)} 
        mb="md"
      >
        Go Back
      </Button>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        <Box>
          <Card shadow="sm" p="lg" radius="md" mb="lg">
            <Card.Section>
              <Image src={course.imageUrl} height={300} alt={course.name} fit="contain" />
            </Card.Section>
            <Center mt="md" mb="xs">
              <Title order={2}>{course.name}</Title>
            </Center>

            <SimpleGrid cols={{ base: 1, xs: 3 }} mt="xl" spacing="xl">
              <Group wrap="nowrap" gap="xs">
                <IconCoin size={24} className="text-blue-600" />
                <Stack gap={0}>
                  <Text size="xs" color="dimmed">Price</Text>
                  <Text weight={500}>${course.price}</Text>
                </Stack>
              </Group>

              <Group wrap="nowrap" gap="xs">
                <IconClock size={24} className="text-blue-600" />
                <Stack gap={0}>
                  <Text size="xs" color="dimmed">Duration</Text>
                  <Text weight={500}>
                    {course.duration} {course.duration === 1 ? 'month' : 'months'}
                  </Text>
                </Stack>
              </Group>

              <Group wrap="nowrap" gap="xs">
                <IconUser size={24} className="text-blue-600" />
                <Stack gap={0}>
                  <Text size="xs" color="dimmed">Instructor</Text>
                  <Text weight={500}>{course.instructor}</Text>
                </Stack>
              </Group>
            </SimpleGrid>
          </Card>

          <Center>
            <Button
              size="lg"
              radius="md"
              onClick={() => alert(`You have enrolled in ${course.name}!`)}
            >
              Enroll Now
            </Button>
          </Center>
        </Box>

        <Card shadow="sm" p="lg" radius="md">
          <Title order={3} mb="md">Course Description</Title>
          <Text color="dimmed" style={{ lineHeight: 1.6 }}>
            {course.description}
          </Text>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
