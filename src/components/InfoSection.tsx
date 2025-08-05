import { Box, Container, Grid, Title, Text, Anchor, TextInput, Button, Group, Divider } from '@mantine/core';
import { IconMapPin, IconPhone, IconMail, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

const quickLinks = [
  'Who are we?',
  'Course',
  'Blog',
  'Gallery',
];

const popularCourses = [
  'DevOps Training',
  'MERN Stack Training',
  'Data Science with Python Training',
  'QA Training | Automation & Manual Testing',
  'Digital Marketing Training',
  'UI/UX Design Training in Nepal',
  'Ethical Hacking Training Course in Nepal',
  'Software Development with Python and Django Framework in Nepal by TechAxis',
];

export function InfoSection() {
  return (
    <Box className="bg-white py-16">
      <Container size="xl">
        <Grid gutter="xl">
          {/* Column 1: Quick Links */}
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Title order={4} className="font-bold text-gray-800">Quick Links</Title>
            <Divider my="sm" />
            <Box className="mt-4">
              {quickLinks.map((link, index) => (
                <Text key={index}>
                  <Anchor href="#" style={{ color: '#000000' }} className="block mt-2 hover:text-blue-600">
                    {link}
                  </Anchor>
                  {index < quickLinks.length - 1 && <br />}
                </Text>
              ))}
            </Box>
          </Grid.Col>

          {/* Column 2: Popular Courses & Subscription */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Title order={4} className="font-bold text-gray-800">Popular Courses</Title>
            <Divider my="sm" />
            <Box className="mt-4">
              {popularCourses.map((course, index) => (
                <Text key={index}>
                  <Anchor href="#" style={{ color: '#000000' }} className="block mt-2 hover:text-blue-600">
                    {course}
                  </Anchor>
                  {index < popularCourses.length - 1 && <br />}
                </Text>
              ))}
            </Box>
            <Box className="mt-8">
              <Group wrap="nowrap">
                <TextInput
                  placeholder="Enter Email Address"
                  leftSection={<IconMail size={20} />}
                  className="flex-grow"
                  styles={{ input: { height: 48, borderColor: '#d1d5db' } }}
                />
                <Button color="blue" size="md" className="h-12">
                  Subscribe
                </Button>
              </Group>
            </Box>
          </Grid.Col>

          {/* Column 3: Resources */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Title order={4} className="font-bold text-gray-800">Information</Title>
            <Divider my="sm" />
            
            <Box className="mt-6">
              <Group wrap="nowrap" className="mb-2">
                <IconMapPin size={20} className="text-gray-500" />
                <Text size="sm" className="text-gray-600">Kumaripati, Lalitpur</Text>
              </Group>
              <Group wrap="nowrap" className="mb-2">
                <IconPhone size={20} className="text-gray-500" />
                <Text size="sm" className="text-gray-600">01-5437592 / 9802302087</Text>
              </Group>
              <Group wrap="nowrap">
                <IconMail size={20} className="text-gray-500" />
                <Text size="sm" className="text-gray-600">info@techaxis.com.np</Text>
              </Group>
            </Box>

            <Box className="mt-8">
              <Title order={5} className="font-bold text-gray-800">Our Social Links</Title>
              <Group className="mt-4">
                <Anchor href="#" target="_blank" rel="noopener noreferrer">
                  <IconBrandFacebook size={24} className="text-gray-500 hover:text-blue-600" />
                </Anchor>
                <Anchor href="#" target="_blank" rel="noopener noreferrer">
                  <IconBrandLinkedin size={24} className="text-gray-500 hover:text-blue-600" />
                </Anchor>
                <Anchor href="#" target="_blank" rel="noopener noreferrer">
                  <IconBrandInstagram size={24} className="text-gray-500 hover:text-blue-600" />
                </Anchor>
              </Group>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}