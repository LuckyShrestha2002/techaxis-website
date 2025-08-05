import { Box, Container, Text, Card } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

const clientLogos = [
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754302704/logpoint_bxxtq0.png',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754302704/jobaxle_vuuu8a.png',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754302704/imegrp_znemd7.png',
  'https://res.cloudinary.com/dblepdhan/image/upload/v1754302704/kantipur_lojz2n.png',
  
];

export function ClientLogos() {
  return (
    <Box className="bg-white py-16">
      <Container size="xl">
        <Text size="lg" c="dimmed" className="text-center font-semibold text-gray-500 tracking-wide">
          WE'VE BEEN TRUSTED BY MORE THAN <span className="font-bold text-blue-500">200+</span> CORPORATE CLIENTS SUCH AS:
        </Text>

        <Carousel
          slideSize={{ base: '100%', sm: '50%', md: '25%' }}
          slideGap="md"
          withIndicators
          className="mt-12"
          withControls={false}
          styles={{
            indicator: {
              width: 12,
              height: 4,
              transition: 'width 250ms ease',
              '&[data-active]': {
                width: 40,
              },
            },
          }}
        >
          {clientLogos.map((logo, index) => (
            <Carousel.Slide key={index}>
              <Card
                padding="xl"
                radius="md"
                className="flex items-center justify-center h-48 bg-white shadow-sm border border-gray-200"
              >
                <img src={logo} alt={`Client Logo ${index + 1}`} className="max-w-full max-h-32 object-contain" />
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}