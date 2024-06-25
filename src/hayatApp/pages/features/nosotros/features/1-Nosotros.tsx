import { Box, Grid, IconButton, Typography } from "@mui/material";
import { LocationOn, Phone } from "@mui/icons-material";

import { widthScreen } from "../../../../hooks/widthScreen";
import { InfoFooter } from "../../../../ui/components/InfoFooter";

import IkiLogo from '../../../../../assets/logo-iki.webp';
import HayatLogo from '../../../../../assets/hayat-logo-bw.webp';
import AudioFest from '../../../../../assets/logo-audiofest-blanco.webp';
import fondoNosotros from '../../../../../assets/nosotros-fondo.webp';

import GrupoDelValleLogo from '../../../../../assets/grupo-del-valle-color.webp';
import { AnimatedTypography } from "../../shared/AnimatedTypography";


export const Nosotros1 = () => {

    const {width} = widthScreen();

    const first_content = 
        (width < 480) 
            ? 1290 
            : (width < 850) ? 1250 : 1110;

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
        sm: '16px',
        md: '16px',
        lg: '16px',
        xl: '16px'
    }

    const fontDirectionsText = {
        xs: '16px',
        sm: '16px',
        md: '17px',
        lg: '17px',
        xl: '17px'
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
                backgroundImage: `url(${fondoNosotros})`,
                backgroundAttachment: 'center',
                backgroundPosition: 'right',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
            }}
        >
            <Box bgcolor={'rgba(38,38,38,0.4)'} >
            <Grid height={first_content} container display='flex' direction='row' >
                {/* <Grid height={first_content} width='12%' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                    <Typography fontWeight='bold' color='white' fontSize='20px' >{(count<1) ? '01' : `0${count}`}</Typography>
                    <Box color='#E3641A' border={3} width='1px' height={'40%'} ></Box>
                    <Box color='white' border={1} width='1px' height={'40%'} ></Box>
                    <Typography fontWeight='bold' color='white' fontSize='20px'>05</Typography>
                </Grid> */}
                <Grid color={'red'} width='100%' fontWeight='500'  p={spaceTextSide}>
                    { (width < 900) 
                    ? <Box justifyItems={'center'} alignItems='center' display={'flex'} flexDirection='row' >
                        <Box m={'100px 0 30px 0'} color={'white'} width={'65%'}>
                        <AnimatedTypography color={'white'} fontSize={fontTextSize} > 
                            Somos un holding empresarial peruano con altos estándares de gestión. 
                        </AnimatedTypography>
                        <AnimatedTypography margin={'20px 0 0 0'} color={'white'} fontSize={fontTextSize}> Nuestra marca se posiciona como el catalizador que conecta los sueños 
                            empresariales con el capital necesario, empoderando el éxito a través de una estrategia financiera efectiva: "Tu lo sueñas nosotros lo creamos"
                        </AnimatedTypography>
                        </Box>
                        <Box height={'100%'} width='25%' m={'100px 0 30px 0'} display='flex' justifyContent='center'>
                            <Box height={'100%'}  width={'80%'} alignContent='center' display='flex' justifyContent='center' top={'-10px'} >
                                <img src={GrupoDelValleLogo} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', height:'100%', maxWidth:'100%', width: '100%'}} />        
                            </Box>
                        </Box>
                    </Box>
                    :   <Box display={'flex'} width={'65%'} flexDirection='row'>
                            <Box color={'white'}>
                            <AnimatedTypography margin='60px 0 0 0' color={'white'} fontSize={fontTextSize} > Somos un holding empresarial peruano con altos estándares de gestión. </AnimatedTypography>
                            <AnimatedTypography margin={'20px 0 0 0'} color={'white'} fontSize={fontTextSize}> Nuestra marca se posiciona como el catalizador que conecta los sueños 
                            empresariales con el capital necesario, empoderando el éxito a través de una estrategia financiera efectiva: "Tu lo sueñas nosotros lo creamos"
                                "Tu lo sueñas nosotros lo creamos" </AnimatedTypography>
                        </Box>
                        
                        <Box width={'25%'} m='0 0 0 0' display='flex' justifyContent='start' position={'absolute'} right='0' top='150px' >
                            <img src={GrupoDelValleLogo} alt="Logo" style={{textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: '63%'}} />        
                        </Box>
                        </Box>
                    }

                    <AnimatedTypography margin={'20px 0 0 0'}  fontWeight={'bold'} fontSize={fontTextSize} color='#E3641A' > Encuentranos en nuestras oficinas </AnimatedTypography>
                    <AnimatedTypography fontWeight={'bold'} fontSize={fontTextSize} color='#E3641A'> Ubicadas en: </AnimatedTypography>
                    
                    <AnimatedTypography padding={(width < 900) ? '0 3% 0 0' : '0 15% 0 0'} display='flex' alignItems='center' color={'white'} fontWeight={'500'} fontSize={fontDirectionsText} > <LocationOn sx={{fontSize: '40px', color:'#E3641A'}} /> Lima Central Tower Oficina 1704, Urb. El Derby 254, Santiago de Surco, Lima  </AnimatedTypography>
                    <AnimatedTypography padding={(width < 900) ? '0 3% 0 0' : '0 15% 0 0'} display='flex' alignItems='center' color={'white'} fontWeight={'500'} fontSize={fontDirectionsText} > <LocationOn sx={{fontSize: '40px', color:'#E3641A'}} /> Urb. Miraflores Av. Luis Montero 390, Distrito de Castilla, Piura</AnimatedTypography>
                    <AnimatedTypography padding={(width < 900) ? '0 3% 0 0' : '0 15% 0 0'} display='flex' alignItems='center' color={'white'} fontWeight={'500'} fontSize={fontDirectionsText} > <LocationOn sx={{fontSize: '40px', color:'#E3641A'}} /> Jose Santos Chocano 617, Umacollo, Arequipa </AnimatedTypography>
                    
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
                        <Typography alignContent='center' justifyContent='center' m={(width < 840) ? '0 0 20px 0' : '0 0 20px 0'} width='22%' color='white' fontWeight='bold' >PROYECTOS EN DESARROLLO: </Typography>
                        <Box alignItems={'center'} justifyContent={'start'} display='flex' height={'100%'} >
                            <Box width={'22%'} height={'100%'} display='flex' justifyContent='center'>
                                <img src={IkiLogo} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s',height:'100%', width: '90%'}} />        
                            </Box>
                            <Box width={'18%'} height={'100%'} display='flex' justifyContent='center'>
                                <img src={HayatLogo} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', height:'100%', width: '80%'}} />        
                            </Box>
                            <Box height={'100%'}  width={'34%'}  display='flex' alignContent={'center'} alignItems={'center'} justifyItems={'center'}>
                                <img src={AudioFest} alt="Logo" style={{ padding:'10% 0 0 0', textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', height: '100%', width: '70%', }} />        
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>

            <InfoFooter sizeContent={second_content} />
            </Box>
        </Box>
    );
}