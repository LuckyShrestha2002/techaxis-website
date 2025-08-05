import { Box, Card, Group, Image, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const methodology = [
  {
    number: '01',
    title: 'Practical Based Learning',
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754236806/1_1_1_1_1_sysmdl.png',
  },
  {
    number: '02',
    title: 'Project Work',
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754235260/2_1_1_1_voq3ve.png',
  },
  {
    number: '03',
    title: 'Student Presentation',
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754235372/3_1_1_db6nak.png',
  },
  {
    number: '04',
    title: 'Evaluation',
    image: 'https://res.cloudinary.com/dblepdhan/image/upload/v1754236903/4_1_1_1_wy4ttb.png',
  },
  {
    number: '05',
    title: 'Interview And CV Preparation',
    image: 'YOUR_INTERVIEW_CV_IMAGE_URL_HERE',
  },
  {
    number: '06',
    title: 'Internship / Job Assistantship',
    image: 'YOUR_INTERVIEW_CV_IMAGE_URL_HERE',
  },
];

export function TeachingMethodology() {
  return (
    <Box className="bg-white py-16">
      <div className="container mx-auto px-4">
        <Title order={2} className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
          Our Teaching Methodology
        </Title>
        <Carousel
          slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
          slideGap="md"
          withIndicators
        >
          {methodology.map((item, index) => (
            <Carousel.Slide key={index}>
              <Card className="flex flex-col items-start p-8 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex items-center mb-4">
                  <Title order={3} className="text-5xl font-bold text-blue-600">
                    {item.number}
                  </Title>
                  <Text size="xl" className="font-semibold text-gray-800" style={{ marginLeft: '24px' }}>
                    {item.title}
                  </Text>
                </div>
                <Box className="w-full flex items-center justify-center mt-auto">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-3/4 h-auto object-contain"
                  />
                </Box>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </Box>
  );
}