// src/components/FeaturedCourses.tsx
import { Box, Card, Group, Image, Text, Title, Button } from '@mantine/core';
import { IconCircleDot, IconPlayerPlay } from '@tabler/icons-react';

// Data for each course card
const courses = [
  {
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754213307/devops_eanbev.png',
    title: 'DevOps Training',
    duration: '3 Months',
  },
  {
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754213543/mern_bcoan2.png',
    title: 'MERN Stack Training',
    duration: '2.5 months',
  },
  {
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754213625/python_yf5hda.png',
    title: 'Python Training',
    duration: '3 Months',
  },
  {
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/QA_oosp1d.png',
    title: 'QA Training | Automation & Manual Testing',
    duration: '2 Months',
  },
  {
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/digital_marketing_rdcrpo.jpg',
    title: 'Digital Marketing Training',
    duration: '2 Months',
  },
  {
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/uiux_ar00yf.png',
    title: 'UI/UX Training',
    duration: '2.5 to 3 Months',
  },
  {
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/ethical_hacking_pijgix.jpg',
    title: 'Ethical Hacking Training',
    duration: '2 Months',
  },
  {
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754213240/django_ymittz.png',
    title: 'Django Training',
    duration: '2 Months',
  },
];

export function FeaturedCourses() {
  return (
    <Box className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <Title order={2} className="text-3xl md:text-4xl font-bold mb-2">
          Our Featured Courses
        </Title>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col items-center p-4 shadow-sm rounded-lg hover:shadow-xl transition-shadow duration-300">
              <Box className="relative w-full h-32 rounded-lg overflow-hidden mb-4">
                <Image 
                  src={course.image}
                  alt={course.title}
                  fit="contain"
                  className="w-full h-full object-cover"
                />
                <Box className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <IconPlayerPlay size={48} className="text-white bg-blue-600 rounded-full p-2" />
                </Box>
              </Box>
              <Box className="text-center w-full">
                <Title order={4} className="text-lg font-bold mb-2 text-gray-800">
                  {course.title}
                </Title>
                <Group className="justify-center gap-2">
                  <IconCircleDot size={14} className="text-blue-600" />
                  <Text size="sm" className="text-gray-500">
                    {course.duration}
                  </Text>
                </Group>
              </Box>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3 transition-colors"
          >
            Explore More Courses
          </Button>
        </div>
      </div>
    </Box>
  );
}