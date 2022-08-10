import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function CarouselBox() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const items = [
    {
      id:1,
      src: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/09/samsung-galaxy-s10_0.jpg',
      alt: 'Primer slide',
    },
    {
      id:2,
      src: 'https://www.tranza.com/content/images/thumbs/0007328.png',
      alt: 'Segundo slide',
    },
    {
      id:3,
      src: 'https://de.aorus.com/upload/Admin/images/33%20(1).jpg',
      alt: 'Tercer slide',
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} controls={true} style={styles.container}>
      {items.map((item)=>(
        <Carousel.Item key={item.id}>
          <img 
            src={item.src} 
            alt={item.alt} 
            style={styles.img}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselBox;

const styles = {
  container:{
    width: '70%',
    height: '20rem',
    backgroundColor: 'black',
  },
  img:{
    width: '100%',
    height: '20rem',
    objectFit: 'cover',
  },
}