import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

import './css/cards.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomRoundedButton } from "../../../../ui/components/CustomRoundedButton";
import { CardType, cards } from "../config/cards";
import { widthScreen } from "../../../../hooks/widthScreen";

interface CardProps {
  img: string;
  title: string;
  content: string;
  onClick: ()=>void
}

const CardOne:React.FC<CardProps> = ({img, title, content, onClick}) => {

  return (
    <div className="slide">
    <Box  sx={{ ml:'6%', objectFit: 'cover', top: 0,  position: "absolute",zIndex:1 }} component='img' width={'38%'}  height={'100%'} overflow='auto' src={img} display='block' ></Box>
          <Box sx={{position:'relative'}} padding={{
                xs: '0 3% 0 50%',
                sm: '0 3% 0 48%',
                md: '0 3% 0 48%',
                lg: '0 3% 0 48%',
                xl: '0 3% 0 48%',
            }} borderRadius='50px' width='92%' height='75%' bgcolor='rgba(238,238,238,0.5)'
          boxShadow='5px 5px 10px rgba(38, 38, 38, 0.7)'
          >
            <Typography padding={'13% 4% 9% 0'} textAlign='left' fontFamily={'Montserrat'} sx={{ fontWeight: 500 ,fontSize: {
                xs: '15px',
                sm: '20px',
                md: '17px',
                lg: '18px',
                xl: '19px'
            } }}> {title}</Typography>
            <Typography textAlign='left' sx={{ mb: '15px', fontSize: {
                xs: '12px',
                sm: '16px',
                md: '15px',
                lg: '16px',
                xl: '17px'
            }}}> {content}
            </Typography>
            <CustomRoundedButton  background="#007EB9" className="" onClick={onClick}> <Typography margin={{
                xs: '0 0px',
                sm: '0 16px',
                md: '0 17px',
                lg: '0 18px',
                xl: '0 40px'
              }} color='white' fontSize={{
                xs: '12px',
                sm: '20px',
                md: '20px',
                lg: '20px',
                xl: '20px'}
            } fontWeight={'bold'} >DISFRUTA</Typography>   </CustomRoundedButton>
    </Box>
    </div>
  );
}

export const CardsInfo: React.FC = () => {

  const {width} = widthScreen();

  const settings = {
    speed: 500,
    dots: true,
    infinite: true,
    centerMode: false,
    autoplay:true,
    autoplaySpeed: 2000,
    slidesToShow: (width < 1200) ? 1 : 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    adaptiveHeight: true,

    // appendDots: (dots: ReactElement[]) => (
    //   <div style={{textAlign: "center"}}>
    //     <ul style={{display: "inline-block", padding: 0}}>
    //       {dots.map((dot, index) => (
    //         <li key={index} style={{listStyle: "none", margin: "0 5px"}}>
    //           {React.cloneElement(dot, {
    //             style: {
    //               width: "15px",
    //               height: "15px",
    //               fontSize: "15px",
    //               color: "red",
    //               ...(dot.props.className && dot.props.className.includes("slick-active") ? { fontSize: "20px", color: "black" } : {})
    //             }
    //           })}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // )
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cards.map((card: CardType, index) =>{
          return (<CardOne
          key={index}
            content={card.content}
            title={card.title}
            img={card.image}
            onClick={()=>{}}
          />)
        })}
      </Slider>
    </div>
  );
};