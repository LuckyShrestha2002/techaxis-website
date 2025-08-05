import { useState } from 'react';
import { IconSearch, IconChevronDown } from '@tabler/icons-react';
import { Burger, Group, Button, Input, AppShell, Drawer, Stack, Anchor, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const links = [
  { link: '/courses', label: 'Courses' },
  { link: '/about', label: 'Who are we?' },
  { link: '/gallery', label: 'Gallery' },
  { link: '/blog', label: 'Blog' },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const desktopNavItems = links.map((link) => {
    if (link.label === 'Courses') {
      return (
        <Group key={link.label} gap={rem(4)} className="items-center">
          <Anchor
            href={link.link}
            className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
            onClick={(event) => event.preventDefault()}
          >
            {link.label}
          </Anchor>
          <IconChevronDown size={14} stroke={1.5} className="text-gray-700" />
        </Group>
      );
    }
    return (
      <Anchor
        key={link.label}
        href={link.link}
        className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Anchor>
    );
  });

  const mobileNavItems = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      className="text-gray-800 hover:text-blue-600 font-medium text-lg"
      onClick={(event) => {
        event.preventDefault();
        close();
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <>
      <AppShell.Header className="h-16 bg-white border-b border-gray-300 px-4 md:px-8">
        <Group className="h-full" justify="space-between" wrap="nowrap">
          {/* Left Section: Logo & Burger Menu */}
          <Group>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" />
            <a href="#" className="no-underline">
              <img src="https://res.cloudinary.com/dblepdhan/image/upload/v1754205292/techaxis_logo-removebg-preview_hmvp53.png" alt="TechAxis Logo" className="h-8" />
            </a>
          </Group>

          {/* Desktop Navigation */}
          <Group visibleFrom="md" gap={rem(32)} className="items-center" wrap="nowrap">
            {/* Search Input */}
            <Input
              className="w-[20rem]"
              radius="lg" 
              placeholder="Enter search course here"
              rightSection={<IconSearch size={16} stroke={1.5} className="text-gray-400" />}
            />
            {/* Links and Button */}
            <Group gap={rem(16)} className="items-center" wrap="nowrap">
              {desktopNavItems}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-2">
                Send An Enquiry
              </Button>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      {/* Mobile Drawer */}
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
           <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-2">
              Send An Enquiry
            </Button>
        </Stack>
      </Drawer>
    </>
  );
}

export default Header;