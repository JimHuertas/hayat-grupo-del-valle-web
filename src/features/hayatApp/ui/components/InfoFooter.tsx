import { FacebookRounded, Instagram, YouTube, PlayArrowRounded } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";

import comida from '../../../../assets/comida.jpg';
import casaPlaya from '../../../../assets/casa-playa.jpg';

import { widthScreen } from "../../hooks/widthScreen";

interface InfoFooterProps {
    sizeContent: number
}

export const InfoFooter: React.FC<InfoFooterProps> = ({sizeContent}) => {

    const {width}  = widthScreen();

    const icons_separation = {
        xs: '0 5px 0 0',
        sm: '0 30px 0 0',
        md: '0 50px 0 0',
        lg: '0 70px 0 0',
        xl: '0 75px 0 0'
    }

    return (
    <Box bgcolor='rgba(38,38,38, 0.6)' height={sizeContent}>
        <Grid container justifyContent='space-between' display='flex' color='#B8B8B8' direction='row'>
            <Box justifyContent='right'  alignItems='center' display='flex' width='32vw'  height={sizeContent}>
                <IconButton onClick={()=>{}} sx={{margin:icons_separation, background: '#F8F8F8', width: '30px', height: '30px'}} > 
                    <FacebookRounded 
                        sx={{
                            '&:hover': {color: 'white'},
                            fontSize:'25px', 
                            color: "#585858"
                        }}
                    /> 
                </IconButton>
                <IconButton onClick={()=>{}} sx={{margin:icons_separation, background: '#F8F8F8', width: '30px', height: '30px'}} > 
                    <YouTube 
                        sx={{
                            '&:hover': {color: 'white'},
                            fontSize:'25px', 
                            color: "#585858"
                        }}
                        />
                </IconButton>
                <IconButton onClick={()=>{}} sx={{ margin:icons_separation, background: '#F8F8F8', width: '30px', height: '30px'}} > 
                    <Instagram 
                        sx={{
                            '&:hover': {color: 'white'},
                            fontSize:'25px', 
                            color: "#585858"
                        }}
                        /> 
                </IconButton>

            </Box>
            <Box alignSelf='center' justifyContent='center' border={1.2} height={sizeContent * (75/100)} display='flex' color='white' />
            
            <Box width='40vw' height={sizeContent} >
            {(width < 890)
                ? <SmallSizeScreenContent sizeContent={sizeContent} width={width}/>
                : <HighSizeScreenContent  sizeContent={sizeContent} width={width}/>
            }
            </Box>
            <Box alignSelf='center' justifyContent='center' border={1.2} height={sizeContent * (75/100)} display='flex' color='white' />
            <Box width='24vw' justifyContent='center' alignItems='center' display='flex' flexDirection={(width < 733) ? 'column' : 'row' } height={sizeContent}>
                <Box display='flex' color='white' justifyContent='center' border={3} borderRadius='30px' width='50px' height='50px' >
                    <IconButton> <PlayArrowRounded style={{color: 'white', fontSize: '150%', }} /> </IconButton>
                </Box>
                <Typography color='white' padding={ (width < 733) ? '6px 0 0 0'  : '0 0 0 10px'} fontSize={(width<504) ? '3vw' : '120%'} fontWeight='bold'>EXPLORAR</Typography>
            </Box>
        </Grid>
    </Box>
    );
}

interface ScreenContentProps{
    width: number;
    sizeContent: number
};

const SmallSizeScreenContent:React.FC<ScreenContentProps> = ({width, sizeContent}) => {
    return (
    <Grid container padding='0 5px' height={sizeContent} alignContent='center' justifyContent='space-between' direction='row' >
         <Box height='100%' flexDirection='column' display='flex' alignItems='center' justifyContent='center' width='50%' >
            <Box component='img' overflow='hidden' src={comida} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: (width < 424) ? '80%' : '50%'}} />
            <Typography textAlign='center' fontSize={(width < 424) ? '9px' : '13px'} color='white' fontWeight='bold' > SHOW ESPECIALES </Typography>
            {(width < 424) 
                ? null 
                : <Typography textAlign='center' fontSize='13px' color='white'> No te pierdas de ...</Typography>}
         </Box>
         <Box height='100%' textAlign='center' flexDirection='column' display='flex' alignItems='center' justifyContent='center' width='50%'>
            <Box component='img' overflow='hidden' src={casaPlaya} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: (width < 424) ? '80%' : '50%' }} />
            <Typography textAlign='center' fontSize={(width < 424) ? '9px' : '13px'}color='white' fontWeight='bold'> COMIDAS Y BEBIDAS </Typography>
            {(width < 424) 
                ? null 
                : <Typography textAlign='center' fontSize='13px' color='white'> No te pierdas de ...</Typography>}
            
         </Box>
     </Grid>
     );
 }

const HighSizeScreenContent:React.FC<ScreenContentProps>  = ({ sizeContent}) => {
   return (
   <Grid container padding='0 5px' alignContent='center' height={sizeContent} justifyContent='space-between' direction='row' >
        <Box component='img' width={{
            md: '20%',
            lg: '25%',
            xl: '20%'
        } } overflow='hidden' src={comida} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s'}} />
        <Box alignContent='center' justifyContent='center' width='24%' >
            <Typography fontSize={{
                md: '13px',
                lg: '15px',
                xl: '20px'
            }} color='white' fontWeight='bold' > SHOW ESPECIALES </Typography>
            <Typography fontSize={{
                md: '13px',
                lg: '15px',
                xl: '20px'
            }} color='white'> No te pierdas de ...</Typography>
        </Box>
        <Box component='img' height='auto' width={{
            md: '24%',
            lg: '20%',
            xl: '17%'
        }} overflow='hidden' src={casaPlaya} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s'}} />
        <Box alignContent='center' justifyContent='center' width='24%'>
            <Typography fontSize={{
                md: '13px',
                lg: '15px',
                xl: '20px'
            }} color='white' fontWeight='bold'> COMIDAS Y BEBIDAS </Typography>
            <Typography fontSize={{
                md: '13px',
                lg: '15px',
                xl: '20px'
            }} color='white'> No te pierdas de ...</Typography>
        </Box>
    </Grid>
    );
}