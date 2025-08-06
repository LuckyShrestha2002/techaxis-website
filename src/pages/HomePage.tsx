// src/pages/HomePage.tsx
import { AppShell } from '@mantine/core';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { FeaturedCourses } from '../components/FeaturedCourses';
import { WhatSetsUsApart } from '../components/WhatSetsUsApart'; 
import { TeachingMethodology } from '../components/TeachingMethodology';
import { SuccessStories } from '../components/SuccessStories';
import { StudentVoice } from '../components/StudentVoice';
import { Specialities } from '../components/Specialities';
import { ClientLogos } from '../components/ClientLogos';
import { MernTrainingSection } from '../components/TrainingSection';
import { BlogSection } from '../components/BlogSection';
import { InfoSection } from '../components/InfoSection';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <AppShell header={{ height: 64 }}>
      <Header />
      <AppShell.Main>
        <Hero />
        <FeaturedCourses />
        <WhatSetsUsApart /> 
        <TeachingMethodology />
        <SuccessStories />
        <StudentVoice />
        <Specialities />
        <ClientLogos />
        <MernTrainingSection />
        <BlogSection />
        <InfoSection />
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}