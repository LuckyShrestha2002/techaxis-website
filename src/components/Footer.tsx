import { Box, Container, Text } from '@mantine/core';

export function Footer() {
  return (
    <Box className="py-6">
      <Container size="xl">
        <Text className="text-white text-center" size="sm">
          © 2025 TechAxis. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}