import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import carousel from "./styles.module.css";
import { Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

interface Item {

  text: string;
  subtext: string;
  image: string;
}

interface Props {
  data: Item[];

}

const data = [

  {
    "text" : "Петров Иван",
    "subtext" : "Старший преподаватель",
    "image" : "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
  },

  {
    "text" : "Маббова Табба",
    "subtext" : "Старший преподаватель",
    "image" : "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
  },

]
;

// [
// 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
// 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
// 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
// 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
// ];

const ImageCarousel = ({data}:Props) => {

  const slides = images.map((url,text,subtext) => (
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
       <h3>text</h3>
       <p>subtext</p>

    </Carousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
      <Carousel 
        withIndicators
        slideSize={{ base: '95%', sm: '50%', md: '32%' }}
        height="100%"
        slideGap={{ base: 'md', sm: 'md' }}
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