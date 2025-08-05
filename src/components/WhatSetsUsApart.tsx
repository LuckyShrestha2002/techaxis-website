// src/components/WhatSetsUsApart.tsx
import { Box, Card, Group, Image, Text, Title } from '@mantine/core';
import { 
  IconUsers, 
  IconBriefcase, 
  IconCode, 
  IconCertificate, 
  IconAward 
} from '@tabler/icons-react';

const stats = [
  { 
    count: '100 +', 
    label: 'Software Company Collaboration', 
    icon: IconUsers,
    color: 'bg-[#405697]'
  },
  { 
    count: '10,000 +', 
    label: 'Trusted And Enrolled Students', 
    icon: IconBriefcase,
    color: 'bg-[#5f68b3]'
  },
  { 
    count: '7,000 +', 
    label: 'Successful Job Placement', 
    icon: IconBriefcase,
    color: 'bg-[#438a9d]'
  },
  { 
    count: '30 +', 
    label: 'In-house Software Development Team', 
    icon: IconCode,
    color: 'bg-[#405697]'
  },
  { 
    count: '20 +', 
    label: 'IT And Engineering College Collaboration', 
    icon: IconCertificate,
    color: 'bg-[#405697]'
  },
  { 
    count: '80 +', 
    label: 'Certified Trainers', 
    icon: IconAward,
    color: 'bg-[#438a9d]'
  },
  { 
    count: '7 +', 
    label: 'Years Of Experience', 
    icon: IconAward,
    color: 'bg-[#5f68b3]'
  },
];

export function WhatSetsUsApart() {
  // Combine stats into a single array for a more streamlined grid layout
  const allStats = [stats[1], stats[2], stats[3], stats[0], stats[4], stats[5], stats[6]];

  return (
    <Box className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-6">
            <Title order={2} className="text-3xl md:text-4xl font-bold text-blue-900">
              What Sets Us Apart?
            </Title>
            <Text size="lg" className="text-gray-700">
              Discover what makes us unique. Our standout features set us apart from the rest, showcasing our commitment to excellence and delivering exceptional value to our students and community.
            </Text>
            <Text size="lg" className="text-gray-700">
              Our own job portal, <b>JobAxle</b> offers job assistance to our students.
            </Text>
            <div className="mt-8">
              <Image 
                src="https://res.cloudinary.com/dblepdhan/image/upload/v1754215183/techtraining_mf8umr.webp"
                alt="Students in a classroom"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Column (Responsive Grid) */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {allStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Box key={index} className={`flex items-center justify-between p-6 rounded-lg text-white ${stat.color}`}>
                    <div>
                      <Title order={3} className="text-3xl font-bold">{stat.count}</Title>
                      <Text size="sm" className="font-medium">{stat.label}</Text>
                    </div>
                    <Icon size={48} className="text-white opacity-20" />
                  </Box>
                );
            })}
          </div>
        </div>
      </div>
    </Box>
  );
}