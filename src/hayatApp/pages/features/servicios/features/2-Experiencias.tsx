import { Box, Typography } from "@mui/material"
import { HorizontalCards } from "../components/HorizontalCards";

import { VerticalCards } from "../components/VerticalCards";
import { MovingImageEffect } from "../components/MovingEffectImage";
import { widthScreen } from "../../../../hooks/widthScreen";



export const Experiencias2 = () => {

    const {width} = widthScreen();

    return (
    <Box  bgcolor='white' width='100%' height={(width < 700) ? '1250px' : '980px'} overflow='hidden' >
    {(width > 700) 
    ? <Box m='50px 0 0 0' display='flex' width='100%' height='250px'      
        p={(width < 950 )
                ? (width < 580)
                    ? '0'
                    : '0  30px 0 30px'
                : '0 8% 0 8%'}
      >
        <Box display='flex' flexDirection={'column'} justifyContent='center' height='100%' width='30%' color='black'>
            <Typography fontWeight='bold' fontSize='1.7vw' >DESCUBRE NUESTROS</Typography>
            <Box display='flex'>
                <Typography fontWeight='bold' fontSize='1.7vw'>ESPACIOS</Typography>
                <Box bgcolor='#E3641A' p='12px 10px'>
                    <Typography fontSize={{
                        xs: '13.5px',
                        sm: '16px',
                        md: '15px',
                        lg: '16px',
                        xl: '18px'}}
                      color='white' >
                        Sin fin de actividades de las cuales podrás disfrutar plenamente
                    </Typography>
                </Box>
            </Box>
            <Box border={1.5} color='#E3641A' width={'100%'} ></Box>
        </Box>
        <Box m={'0 0 0 4%'} height='100%' width='70%' color='black'>
            <HorizontalCards/>
        </Box>
      </Box>
    : <Box m='50px 0 0 0' display='flex' flexDirection='column' width='100%' height='500px'  
        p={'0 0 0 8%'} >
        <Box p={(width < 540 ) ? '0 7%' : '0 9%'} height={(width < 540 ) ? '25%' : '35%'} width='97%' color='black'>
            <Typography fontWeight='bold' fontSize={(width < 550) ? '6.0vw' : '5vw'} >DESCUBRE NUESTROS</Typography>
            <Box display='flex'>
                <Typography fontWeight='bold' fontSize={(width < 550) ? '6.0vw' : '5vw'}>ESPACIOS</Typography>
                <Box bgcolor='#E3641A' p='12px 10px'>
                    <Typography fontSize={{
                        xs: '12px',
                        sm: '17px',
                        md: '20px',}}
                      color='white' >
                        Sin fin de actividades de las cuales podrás disfrutar plenamente
                    </Typography>
                </Box>
            </Box>
            <Box border={1.5} color='#E3641A' width={'100%'} ></Box>
        </Box>
        <Box height='60%' width='100%' color='black'>
            <VerticalCards/>
        </Box>
      </Box>
    }

    <Box p='0 2vw' display='flex' alignItems='center' alignContent='center' >
        <Box border={1.5} color='#E3641A' height={'0'} width={'100px'} />
        <Typography fontWeight='bold' fontSize='20px' p='10px 10px' >DESCUBRE LAS MEJORES EXPERIENCIAS</Typography>
        <Typography fontWeight='500' p='10px 10px' >Tendrás inumerables acividades de las cuales podrías a lo largo de tu estadía con nosotros</Typography>
    </Box>

    <Box display='flex' alignContent='center' justifyContent='center' width={'100%'} color='red' height='560px' >
        <MovingImageEffect/>
    </Box>


    </Box>
    );

}