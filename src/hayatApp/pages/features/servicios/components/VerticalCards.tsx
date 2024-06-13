import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ArrowDropUpRounded, ArrowDropDownRounded  } from '@mui/icons-material'
import './css/cardsExpVert.css';
import { cards } from "../config/cards";


export const VerticalCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box className="vert-slider-container">
      <Button onClick={handlePrev} sx={{ width:'50px', height:'60px', position: 'absolute', top:0, left: 0, background: '#456578'}} className="arrow-btn">
        <ArrowDropUpRounded sx={{ fontSize: '50px'}} />
      </Button>
      <Box className="vert-slider-content">
        {cards.map((card, index) => (
          <Box
            m='0 0 0 70px'
            bgcolor={(index % 2 === 0) ? 'greenyellow' : 'red'}
            key={index}
            className={`vert-slider-item ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateY(${-currentIndex * 100}%)` }}
          >
            <Typography>{card.content}</Typography>
          </Box>
        ))}
      </Box>
      <Button sx={{ width:'50px', height:'60px', position: 'absolute', bottom:0, left: 0, background: '#456578', color: 'greenyellow' }} onClick={handleNext} className="arrow-btn">
        <ArrowDropDownRounded sx={{ fontSize: '50px'}}  />
      </Button>
      <Box className="dots-container">
        {cards.map((_, index) => (
          <Box
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};