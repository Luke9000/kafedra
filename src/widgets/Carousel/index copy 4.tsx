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


const ImageCarousel = ({data}:Props) => {

  const slides = data.map(({text,subtext,image}) => (
    <Carousel.Slide key={text}>
        <Image src={image} className='image'/>
        <h3>{text}</h3>
        <p>{subtext}</p>
    </Carousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
      <Carousel 
        // slidesToScroll =  {1}
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