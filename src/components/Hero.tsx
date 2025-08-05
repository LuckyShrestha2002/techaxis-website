// src/components/Hero.tsx
import { Box, Container, Overlay, Title, Text, Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

export function Hero() {
  return (
    <Box
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Blue Overlay */}
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
        className="absolute inset-0 bg-blue-950/150"
      />
      
      <Container className="relative z-10 py-10" size="md">
        <Title 
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
        >
          A Complete IT Learning Academy
        </Title>
        <Text 
          size="lg" 
          className="text-md md:text-xl max-w-2xl mx-auto mb-8 font-light tracking-wide leading-relaxed"
        >
          Welcome to the TechAxis IT training institute, established in 2017 by a team of highly skilled IT engineers and professionals with the motto "Learn First to Lead The Rest".
        </Text>
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-2 transition-colors mb-30"
          rightSection={<IconArrowRight size={18} stroke={1.5} />}
        >
          Explore our Courses
        </Button>
      </Container>
    </Box>
  );
}