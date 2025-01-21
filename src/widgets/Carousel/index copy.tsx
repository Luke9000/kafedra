import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import carousel from "./styles.module.css";
import { Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';


const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];


const ImageCarousel = () => {

  const slides = images.map((url) => (
    <Carousel.Slide key={url} style={{ 
      borderRadius: '55px', 
      overflow: 'hidden', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
      marginBottom: '10px',
      marginTop: '10px', }}>
      <Image src={url}  style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }} />
    </Carousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
      <Carousel 
        withIndicators
        slideSize="40%"
        height={60} 
        slideGap="md" 
        classNames={carousel}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        includeGapInSize={false}
        loop={true}
        >
          {slides}
        </Carousel>
  )
}

export default ImageCarousel