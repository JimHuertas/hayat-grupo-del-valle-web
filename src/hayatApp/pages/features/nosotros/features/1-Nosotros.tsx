import { Box, Grid, IconButton, Typography } from "@mui/material";
import { LocationOn, Phone } from "@mui/icons-material";

import { widthScreen } from "../../../../hooks/widthScreen";
import { InfoFooter } from "../../../../ui/components/InfoFooter";
// import { countState } from "../../../../hooks/countState";

import IkiLogo from '../../../../../assets/logo-iki.webp';
import HayatLogo from '../../../../../assets/hayat-logo-bw.webp';

import GrupoDelValleLogo from '../../../../../assets/grupo-del-valle-color.webp';


export const Nosotros1 = () => {

    const {width} = widthScreen();

    const first_content = (width < 480) ? 1200 : 1250;
    // const second_content = (height < 800) ? 800 * (20/100): height * (22.7/100);
    const second_content = 180;

    const spaceTextSide = {
        xs: '0 10px  0 30px',
        sm: '20px 10px  0 70px',
        md: '105px 40px 0 100px',
        lg: '100px 40px 0 100px',
        xl: '120px 40px 0 100px'
    }
    const fontTextSize = {
        xs: '15px',
        sm: '18px',
        md: '20px',
        lg: '20px',
        xl: '20px'
    }

    const fontDirectionsText = {
        xs: '16px',
        sm: '20px',
        md: '22px',
        lg: '22px',
        xl: '22px'
    }

    const boxNumberPhoneSize = {
        xs: '180px',
        sm: '250px',
        md: '240px',
        lg: '240px',
        xl: '240px'
    }

    return (
        <Box
            bgcolor={'rgba(38,38,38,0.3)'}
            sx={{ 
                backgroundAttachment: 'center',
                // backgroundImage: `url(${urlImage3})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: (width < 400) ? '100px 0 0 0' : '120px 0 0 0',
                width: '100%', 
            }}
        >
            <Grid height={first_content} container display='flex' direction='row' >
                {/* <Grid height={first_content} width='12%' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                    <Typography fontWeight='bold' color='white' fontSize='20px' >{(count<1) ? '01' : `0${count}`}</Typography>
                    <Box color='#E3641A' border={3} width='1px' height={'40%'} ></Box>
                    <Box color='white' border={1} width='1px' height={'40%'} ></Box>
                    <Typography fontWeight='bold' color='white' fontSize='20px'>05</Typography>
                </Grid> */}
                <Grid color={'red'}width='100%' fontWeight='500'  p={spaceTextSide}>
                    { (width < 900) 
                    ? <Box display={'flex'} flexDirection='column' >
                        <Box m={'0 0 30px 0'} display='flex' justifyContent='center'>
                            <Box height={'100%'} width={'40%'} alignContent='center' display='flex' justifyContent='center' top={'-10px'} >
                                <img src={GrupoDelValleLogo} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: '98%'}} />        
                            </Box>
                        </Box>
                        <Box color={'white'} width={'95%'}>
                        <Typography color={'white'} fontSize={fontTextSize} > Un propósito claro, catalizar el crecimiento económico al ofrecer asesoramiento
                            experto y oportunidades de financiamiento innovadoras. En el núcleo de nuestra misión está 
                            la convicción de que cada proyecto merece la oportunidad de florecer, y estamos comprometidos 
                            a ser el puente que transforma ideas en realidades financieras sólidas </Typography>
                        <Typography m={'20px 0 0 0'} color={'white'} fontSize={fontTextSize}> Representa la fusión perfecta entre la ambición empresarial y el respaldo financiero,
                            construyendo un sólido puente hacia el éxito. Esta marca se posiciona como el catalizador que conecta los sueños
                            empresariales con el capital necesario, empoderando el éxito a travéz de una estrategia financiera efectiva.
                            "Tu lo sueñas nosotros lo creamos" </Typography>
                        </Box>
                    </Box>
                    :   <Box display={'flex'} width={'68%'} flexDirection='row'>
                            <Box color={'white'}>
                            <Typography color={'white'} fontSize={fontTextSize} > Un propósito claro, catalizar el crecimiento económico al ofrecer asesoramiento
                                experto y oportunidades de financiamiento innovadoras. En el núcleo de nuestra misión está 
                                la convicción de que cada proyecto merece la oportunidad de florecer, y estamos comprometidos 
                                a ser el puente que transforma ideas en realidades financieras sólidas </Typography>
                            <Typography m={'20px 0 0 0'} color={'white'} fontSize={fontTextSize}> Representa la fusión perfecta entre la ambición empresarial y el respaldo financiero,
                                construyendo un sólido puente hacia el éxito. Esta marca se posiciona como el catalizador que conecta los sueños
                                empresariales con el capital necesario, empoderando el éxito a travéz de una estrategia financiera efectiva.
                                "Tu lo sueñas nosotros lo creamos" </Typography>
                        </Box>
                        
                        <Box height={'30%'} width={'30%'} display='fixed' justifyContent='center' position={'absolute'} right='0' top='190px' >
                            <img src={GrupoDelValleLogo} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: '98%'}} />        
                        </Box>
                        </Box>
                    }

                    <Typography m={'20px 0 0 0'}  fontWeight={'bold'} fontSize={fontTextSize} color='#E3641A' > Encuentranos en nuestras oficinas </Typography>
                    <Typography fontWeight={'bold'} fontSize={fontTextSize} color='#E3641A'> Ubicadas en: </Typography>
                    
                    <Typography display='flex' alignItems='center' color={'white'} fontWeight={'500'} fontSize={fontDirectionsText} > <LocationOn sx={{fontSize: '40px', color:'#E3641A'}} /> Direccion Lima </Typography>
                    <Typography display='flex' alignItems='center' color={'white'} fontWeight={'500'} fontSize={fontDirectionsText} > <LocationOn sx={{fontSize: '40px', color:'#E3641A'}} /> Direccion Piura </Typography>
                    <Typography display='flex' alignItems='center' color={'white'} fontWeight={'500'} fontSize={fontDirectionsText} > <LocationOn sx={{fontSize: '40px', color:'#E3641A'}} /> Jose Santos Chocano 617, Umacollo, Arequipa </Typography>
                    
                    <Typography m='20px 0 0 0' fontWeight={'bold'} fontSize={fontTextSize} color='#E3641A'> Contáctanos al: </Typography>
                    <Box m='20px 0 0 0' display={'flex'} flexDirection={(width<840) ? 'column' :'row'}>
                        <Box borderRadius='30px' height='40px' width={boxNumberPhoneSize} bgcolor={'#E3641A'} alignItems='center' justifyContent='center' display='flex'> 
                            <IconButton href="tel:916241181" >
                            <Typography color='white' fontSize={fontDirectionsText}> 
                                <Phone sx={{ alignItems:'center', fontSize: fontDirectionsText}} /> +51 000-000-000 
                            </Typography> 
                            </IconButton>
                        </Box>
                        <Box m={(width < 840) ? '10px 0 0 0' : '0 0 0 18px'} height='40px' borderRadius='30px' width={boxNumberPhoneSize} bgcolor={'#E3641A'} alignItems='center' justifyContent='center' display='flex' color='white'> 
                            <IconButton href="tel:916241181" >
                            <Typography color='white' fontSize={fontDirectionsText}> 
                                <Phone sx={{ alignItems:'center', fontSize: fontDirectionsText}} /> +51 000-000-000 
                            </Typography> 
                            </IconButton>
                        </Box>
                    </Box>
                    
                    <Box m='20px 0 0 0' width={(width < 900) ? '100%' :'70%'} flexDirection={(width < 840) ? 'column' :'row'} display={'flex'} >
                        <Typography alignContent='center' justifyContent='center' m={(width < 840) ? '0 0 20px 0' : '0 0 20px 0'} width='50vw' color='white' fontWeight='bold' >PROYECTOS EN DESARROLLO: </Typography>
                        <Box display='flex' >
                            <Box display='flex' justifyContent='center'>
                                <img src={IkiLogo} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: '80%'}} />        
                            </Box>
                            <Box display='flex' justifyContent='center'>
                                <img src={HayatLogo} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: '80%'}} />        
                            </Box>
                            <Box display='flex' justifyContent='center'>
                                <img src={IkiLogo} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: '80%'}} />        
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>

            <InfoFooter sizeContent={second_content} />
        </Box>
    );
}