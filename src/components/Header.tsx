import { useState, useEffect } from 'react';
import { IconSearch, IconChevronDown } from '@tabler/icons-react';
import { Burger, Group, Button, Input, AppShell, Drawer, Stack, Anchor, rem, Modal, TextInput, Select, Textarea, Title, Box, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface Course {
  id: number;
  name: string;
}

const links = [
  { link: '/about', label: 'Who are we?' },
  { link: '/gallery', label: 'Gallery' },
  { link: '/blog', label: 'Blog' },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    courseId: '',
    message: '',
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/courses');
        if (!response.ok) {
          throw new Error('Failed to fetch courses.');
        }
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourses();
  }, []);

  const handleEnquiryFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEnquiryForm({ ...enquiryForm, [name]: value });
  };

  const handleEnquiryCourseChange = (value: string | null) => {
    setEnquiryForm({ ...enquiryForm, courseId: value as string });
  };

  const handleSendEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enquiryForm),
      });

      if (!response.ok) {
        throw new Error('Failed to send enquiry.');
      }

      alert('Your enquiry has been sent!');
      setIsEnquiryModalOpen(false);
      setEnquiryForm({ name: '', email: '', courseId: '', message: '' });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const courseOptions = courses.map(course => ({
    value: course.id.toString(),
    label: course.name,
  }));

  const desktopNavItems = (
    <>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Group gap={rem(4)} className="items-center cursor-pointer">
            <Anchor
              className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
            >
              Courses
            </Anchor>
            <IconChevronDown size={14} stroke={1.5} className="text-gray-700" />
          </Group>
        </Menu.Target>
        <Menu.Dropdown>
          {courses.map((course) => (
            <Menu.Item key={course.id} component="a" href={`/courses/${course.id}`}>
              {course.name}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>

      {links.map((link) => (
        <Anchor
          key={link.label}
          href={link.link}
          className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </Anchor>
      ))}
    </>
  );

  const mobileNavItems = (
    <>
      <Group gap={rem(4)} className="items-center">
        <Anchor
          href="/courses"
          className="text-gray-800 hover:text-blue-600 font-medium text-lg"
          onClick={(event) => { event.preventDefault(); close(); }}
        >
          Courses
        </Anchor>
        <IconChevronDown size={14} stroke={1.5} className="text-gray-800" />
      </Group>
      {courses.map((course) => (
        <Anchor
          key={course.id}
          href={`/courses/${course.id}`}
          className="ml-4 text-gray-600 hover:text-blue-500 font-normal text-md"
          onClick={(event) => { event.preventDefault(); close(); }}
        >
          {course.name}
        </Anchor>
      ))}

      {links.map((link) => (
        <Anchor
          key={link.label}
          href={link.link}
          className="text-gray-800 hover:text-blue-600 font-medium text-lg"
          onClick={(event) => { event.preventDefault(); close(); }}
        >
          {link.label}
        </Anchor>
      ))}
    </>
  );

  return (
    <>
      <AppShell.Header className="h-16 bg-white border-b border-gray-300 px-4 md:px-8">
        <Group className="h-full" justify="space-between" wrap="nowrap">
          <Group>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" />
            <a href="#" className="no-underline">
              <img src="https://res.cloudinary.com/dblepdhan/image/upload/v1754205292/techaxis_logo-removebg-preview_hmvp53.png" alt="TechAxis Logo" className="h-8" />
            </a>
          </Group>

          <Group visibleFrom="md" gap={rem(32)} className="items-center" wrap="nowrap">
            <Input
              className="w-[20rem]"
              radius="lg"
              placeholder="Enter search course here"
              rightSection={<IconSearch size={16} stroke={1.5} className="text-gray-400" />}
            />
            <Group gap={rem(16)} className="items-center" wrap="nowrap">
              {desktopNavItems}
              <Button onClick={() => setIsEnquiryModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-2">
                Send An Enquiry
              </Button>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <Drawer
        opened={opened}
        onClose={close}
        padding="md"
        size="sm"
        title={
          <a href="#" className="no-underline">
            <img src="https://res.cloudinary.com/dblepdhan/image/upload/v1754205292/techaxis_logo-removebg-preview_hmvp53.png" alt="TechAxis Logo" className="h-8" />
          </a>
        }
        hiddenFrom="md"
      >
        <Stack gap="sm">
          <Input
            className="w-full"
            radius="lg"
            placeholder="Enter search course here"
            rightSection={<IconSearch size={16} stroke={1.5} className="text-gray-400" />}
          />
          {mobileNavItems}
          <Button onClick={() => setIsEnquiryModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-2">
            Send An Enquiry
          </Button>
        </Stack>
      </Drawer>

      <Modal opened={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} title="Course Enquiry">
        <Box component="form" onSubmit={handleSendEnquiry}>
          <Stack spacing="md">
            <TextInput
              label="Your Name"
              name="name"
              value={enquiryForm.name}
              onChange={handleEnquiryFormChange}
              required
            />
            <TextInput
              label="Your Email"
              name="email"
              value={enquiryForm.email}
              onChange={handleEnquiryFormChange}
              type="email"
              required
            />
            <Select
              label="Course of Interest"
              placeholder="Pick one"
              name="courseId"
              value={enquiryForm.courseId}
              onChange={handleEnquiryCourseChange}
              data={courseOptions}
              required
            />
            <Textarea
              label="Your Message"
              name="message"
              value={enquiryForm.message}
              onChange={handleEnquiryFormChange}
              required
            />
            <Group justify="flex-end">
              <Button variant="outline" onClick={() => setIsEnquiryModalOpen(false)}>Cancel</Button>
              <Button type="submit">Send Enquiry</Button>
            </Group>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

export default Header;