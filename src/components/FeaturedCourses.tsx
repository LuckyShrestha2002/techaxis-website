// src/components/FeaturedCourses.tsx
import { Box, Card, Group, Image, Text, Title, Button, Skeleton } from '@mantine/core';
import { IconPlayerPlay } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the shape of the data we expect from the API
interface Course {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export function FeaturedCourses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/courses');
        if (!response.ok) {
          throw new Error('Failed to fetch featured courses.');
        }
        const data = await response.json();
        setCourses(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <Box className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Title order={2} className="text-3xl md:text-4xl font-bold mb-12">
            Our Featured Courses
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="flex flex-col items-center p-4 shadow-sm rounded-lg">
                <Skeleton height={128} mb="md" />
                <Skeleton height={20} mb="xs" width="80%" />
                <Skeleton height={15} width="50%" />
              </Card>
            ))}
          </div>
        </div>
      </Box>
    );
  }
  
  if (error) {
    return (
      <Box className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Title order={2} className="text-3xl md:text-4xl font-bold mb-12">
            Our Featured Courses
          </Title>
          <Text color="red">Error: {error}</Text>
        </div>
      </Box>
    );
  }

  return (
    <Box className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <Title order={2} className="text-3xl md:text-4xl font-bold mb-12">
          Our Featured Courses
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col items-center p-4 shadow-sm rounded-lg hover:shadow-xl transition-shadow duration-300">
              <Box className="relative w-full h-32 rounded-lg overflow-hidden mb-4">
                <Image 
                  src={course.imageUrl}
                  alt={course.name}
                  fit="contain"
                  className="w-full h-full object-cover"
                />
                <Box className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <IconPlayerPlay size={48} className="text-white bg-blue-600 rounded-full p-2" />
                </Box>
              </Box>
              <Box className="text-center w-full">
                <Title order={4} className="text-lg font-bold mb-2 text-gray-800">
                  {course.name}
                </Title>
                
                {/* Description is now its own text block below the title */}
                <Text 
                  size="sm" 
                  className="text-gray-500" 
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    height: '2.8rem'
                  }}
                >
                  {course.description}
                </Text>

              </Box>
              <Button 
                onClick={() => navigate(`/course/${course.id}`)} 
                fullWidth 
                mt="md" 
                variant="light" 
                color="blue"
              >
                View Course
              </Button>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3 transition-colors"
            onClick={() => navigate('/')} 
          >
            Explore More Courses
          </Button>
        </div>
      </div>
    </Box>
  );
}