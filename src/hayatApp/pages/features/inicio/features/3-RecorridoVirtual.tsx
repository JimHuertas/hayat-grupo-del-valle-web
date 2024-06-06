import { Box, IconButton, Typography } from "@mui/material";
import virtual3d from '../../../../../assets/3d-recorrido.webp'; 
import { Icon360 } from "../components/icon360";
import { widthScreen } from "../../../../hooks/widthScreen";

export const RecorridoVirtual3: React.FC = () => {

    const {width} = widthScreen();

    return (
        <Box 
            sx={{ 
                backgroundImage: `url(${virtual3d})`,
                padding: 'none',
                width: '100%', 
                height: '60vh',
                display:'flex'
            }}
        >
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} width={'100%'} height={'100%'} bgcolor={'rgba(227, 100, 26, 0.8)'} >
                <Typography color={'white'} justifyContent={'center'} width={'100%'} display={'flex'} textAlign={'center'} fontWeight={'bold'} fontSize={(width < 700) ? '7vw' :'60px'}>RECORRIDO VIRTUAL</Typography> 
                <Box  display={'flex'} justifyContent={'center'}>
                    <IconButton sx={{  '&:hover':{cursor: 'pointer',transform: 'scale(1.05)', transition: 'all 0.3s ease-in-out',}, borderRadius:'80px'}} >
                    <Box p={(width< 550) ? '0 5px' :'0 30px'} borderRadius={'40px'} bgcolor={'rgba(255,255,255,0.8)'} width={(width < 550) ? '78vw' : '500px'} height={(width< 550) ? '45px' : '60px'} display={'fixed'}>
                        <Box display={'flex'} alignContent={'center'} alignItems={'center'} >
                            <Icon360 size={(width< 550) ? '13vw' :"70px"} color="#E3641A"/>
                        </Box>
                        <Typography p={(width< 550) ? '0 0 0 2px' : '0 0 0 10px'} fontSize={(width< 550) ? '6.5vw' : '40px'} alignContent={'center'} fontWeight={'bold'} color={'#E3641A'} >PROXIMAMENTE</Typography>
                    </Box>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}