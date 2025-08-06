import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Image, Text, Title, Button, Group, Center, Box, Skeleton } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

interface Course {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
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
          <Skeleton height={200} mb="md" />
          <Skeleton height={40} mb="xs" />
          <Skeleton height={20} width="70%" />
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
    <Container size="md" py="xl">
      <Button 
        variant="subtle" 
        leftSection={<IconArrowLeft size={14} />} 
        onClick={() => navigate(-1)} 
        mb="md"
      >
        Go Back
      </Button>
      <Card shadow="sm" padding="lg" radius="md">
        <Card.Section>
          <Image src={course.imageUrl} height={300} alt={course.name} fit="contain" />
        </Card.Section>
        <Box mt="md">
          <Title order={1} align="center" mb="sm">{course.name}</Title>
          <Text align="center" size="lg" color="dimmed">
            {course.description}
          </Text>
        </Box>
      </Card>
    </Container>
  );
}