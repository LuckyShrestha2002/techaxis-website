import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Box, Card, Group, Text, Title, Button, TextInput, Badge, Image, SimpleGrid, Stack, Center, Container, Modal, NumberInput } from '@mantine/core';
import { useAuth } from '../AuthContext';

// Updated interface to include all fields
interface Course {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  duration: string;
  instructor: string;
}

export function AdminDashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Updated initial state for new course
  const [newCourse, setNewCourse] = useState({ 
    name: '', 
    description: '', 
    imageUrl: '',
    price: 0,
    duration: '',
    instructor: '',
  });

  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [courseToDeleteId, setCourseToDeleteId] = useState<number | null>(null);
  const { logout } = useAuth();
  
  const [searchQuery, setSearchQuery] = useState('');

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/courses');
      if (!response.ok) {
        throw new Error('Failed to fetch courses.');
      }
      const data = await response.json();
      setCourses(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };
  
  const handlePriceChange = (value: number) => {
    setNewCourse({ ...newCourse, price: value });
  };

  const handleCreateCourse = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create course.');
      }

      await fetchCourses();
      setNewCourse({ name: '', description: '', imageUrl: '', price: 0, duration: '', instructor: '' });
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleDeleteCourse = async () => {
    if (courseToDeleteId === null) return;
    try {
      const response = await fetch(`http://localhost:3000/api/courses/${courseToDeleteId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete course.');
      }

      await fetchCourses();
      setIsDeleteModalOpen(false);
      setCourseToDeleteId(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const openDeleteModal = (id: number) => {
    setCourseToDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const handleEditClick = (course: Course) => {
    setEditingCourse(course);
    setIsEditModalOpen(true);
  };

  const handleUpdateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editingCourse) {
      setEditingCourse({ ...editingCourse, [name]: value });
    }
  };
  
  const handleUpdatePriceChange = (value: number) => {
    if (editingCourse) {
      setEditingCourse({ ...editingCourse, price: value });
    }
  };

  const handleUpdateCourse = async (e: FormEvent) => {
    e.preventDefault();
    if (!editingCourse) return;

    try {
      const response = await fetch(`http://localhost:3000/api/courses/${editingCourse.id}`, {
        method: 'PATCH', // Changed from 'PUT' to 'PATCH' to match NestJS standard
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingCourse),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update course.');
      }
      await fetchCourses();
      setIsEditModalOpen(false);
      setEditingCourse(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text color="red">Error: {error}</Text>;

  return (
    <Box>
      <Box style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <Group position="apart" align="center" style={{ width: '100%' }}>
          <Box style={{ flexGrow: 1, textAlign: 'center' }}>
            <Title order={1}>Admin Dashboard</Title>
          </Box>
          <Button onClick={logout} variant="outline" color="red">
            Log Out
          </Button>
        </Group>
      </Box>

      <Box p="xl">
        <Center>
          <Container size="sm" style={{ width: '100%' }}>
            <Card shadow="sm" p="lg" radius="md" mb="xl">
              <Title order={3} align="center" mb="md">Add a New Course</Title>
              <Box component="form" onSubmit={handleCreateCourse}>
                <Stack spacing="md">
                  <TextInput
                    label="Course Name"
                    placeholder="e.g., DevOps Training"
                    name="name"
                    value={newCourse.name}
                    onChange={handleInputChange}
                    required
                  />
                  <TextInput
                    label="Description"
                    placeholder="e.g., Our course provide...."
                    name="description"
                    value={newCourse.description}
                    onChange={handleInputChange}
                    required
                  />
                  <TextInput
                    label="Image URL"
                    placeholder="https://..."
                    name="imageUrl"
                    value={newCourse.imageUrl}
                    onChange={handleInputChange}
                    required
                  />
                  <NumberInput
                    label="Price"
                    placeholder="e.g., 99.99"
                    name="price"
                    value={newCourse.price}
                    onChange={handlePriceChange}
                    precision={2}
                    min={0}
                    required
                  />
                  <TextInput
                    label="Duration"
                    placeholder="e.g., 3 Months"
                    name="duration"
                    value={newCourse.duration}
                    onChange={handleInputChange}
                    required
                  />
                  <TextInput
                    label="Instructor"
                    placeholder="e.g., John Doe"
                    name="instructor"
                    value={newCourse.instructor}
                    onChange={handleInputChange}
                    required
                  />
                  <Button type="submit" fullWidth>Add Course</Button>
                </Stack>
              </Box>
            </Card>
          </Container>
        </Center>

        <Title order={3} mb="md">Manage Existing Courses</Title>
        <Center mb="lg">
          <Container size="sm" style={{ width: '100%' }}>
            <TextInput
              placeholder="Search for courses..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.currentTarget.value)}
              radius="xl" 
            />
          </Container>
        </Center>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
          {filteredCourses.map((course) => (
            <Card key={course.id} shadow="sm" p="lg" radius="md">
              <Card.Section>
                <Image src={course.imageUrl} alt={course.name} height={160} fit="contain" />
              </Card.Section>
              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{course.name}</Text>
                <Badge>{course.duration}</Badge>
              </Group>
              <Text size="sm" color="dimmed">
                Price: <b className='text-blue-600'>${course.price}</b>
              </Text>
              <Text size="sm" color="dimmed">
                Instructor: <b className='text-blue-600'>{course.instructor}</b>
              </Text>
              <Text size="sm" color="dimmed" mt="xs">
                {course.description}
              </Text>
              <Group grow mt="md">
                <Button variant="light" color="blue" onClick={() => handleEditClick(course)}>Edit</Button>
                <Button
                  variant="light"
                  color="red"
                  onClick={() => openDeleteModal(course.id)}
                >
                  Delete
                </Button>
              </Group>
            </Card>
          ))}
        </SimpleGrid>

        <Modal opened={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Edit Course">
          {editingCourse && (
            <Box component="form" onSubmit={handleUpdateCourse}>
              <Stack spacing="md">
                <TextInput
                  label="Course Name"
                  name="name"
                  value={editingCourse.name}
                  onChange={handleUpdateChange}
                  required
                />
                <TextInput
                  label="Description"
                  name="description"
                  value={editingCourse.description}
                  onChange={handleUpdateChange}
                  required
                />
                <TextInput
                  label="Image URL"
                  name="imageUrl"
                  value={editingCourse.imageUrl}
                  onChange={handleUpdateChange}
                  required
                />
                 <NumberInput
                  label="Price"
                  name="price"
                  value={editingCourse.price}
                  onChange={handleUpdatePriceChange}
                  precision={2}
                  min={0}
                  required
                />
                <TextInput
                  label="Duration"
                  name="duration"
                  value={editingCourse.duration}
                  onChange={handleUpdateChange}
                  required
                />
                <TextInput
                  label="Instructor"
                  name="instructor"
                  value={editingCourse.instructor}
                  onChange={handleUpdateChange}
                  required
                />
                <Group position="right">
                  <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
                  <Button type="submit">Save Changes</Button>
                </Group>
              </Stack>
            </Box>
          )}
        </Modal>

        <Modal opened={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="Confirm Deletion">
          <Text>Are you sure you want to delete this course? This action cannot be undone.</Text>
          <Group position="right" mt="md">
            <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
            <Button color="red" onClick={handleDeleteCourse}>Confirm Delete</Button>
          </Group>
        </Modal>
      </Box>
    </Box>
  );
}