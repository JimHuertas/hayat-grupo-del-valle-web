import { Box, Typography } from "@mui/material"
import { HorizontalCards } from "../components/HorizontalCards";
import { widthScreen } from "../../../../hooks/widthScreen";
import { VerticalCards } from "../components/VerticalCards";

export const Experiencias2 = () => {

    const {width} = widthScreen();

    return (
    <Box  bgcolor='white' width='100%' height='1000px' >
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

    : <Box m='50px 0 0 0' display='flex' flexDirection='column' width='100%' bgcolor='rgba(34,154,123,0.4)' height='750px'  
        p={'0 8% 0 8%'} >
        <Box height='27%' width='98%' border={2} color='black'>
            <Typography fontWeight='bold' fontSize='6.5vw' >DESCUBRE NUESTROS</Typography>
            <Box display='flex'>
                <Typography fontWeight='bold' fontSize='6.5vw'>ESPACIOS</Typography>
                <Box bgcolor='#E3641A' p='12px 10px'>
                    <Typography fontSize={{
                        xs: '15px',
                        sm: '20px',
                        md: '25px',
                        lg: '25px',
                        xl: '25px'}}
                      color='white' >
                        Sin fin de actividades de las cuales podrás disfrutar plenamente
                    </Typography>
                </Box>
            </Box>
            <Box border={1.5} color='#E3641A' width={'100%'} ></Box>
        </Box>
        <Box height='60%' border={1} width='98%' color='black'>
            <VerticalCards/>
        </Box>
        
      </Box>
    
    }

    </Box>
    );

}