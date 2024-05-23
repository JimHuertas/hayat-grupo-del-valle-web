import { Facebook, Instagram, YouTube, X, LinkedIn } from "@mui/icons-material"
import { Box, Grid, IconButton, TextField, Theme, Typography, useMediaQuery } from "@mui/material"
import { widthScreen } from "../../hooks/widthScreen";

import logoHayat from '../../../../assets/hayat-logo-2.png';
import videoDemo from '../../../../assets/demo.mp4';
import logoGrupoDelValle from '../../../../assets/grupo-del-valle.png';

const Links = [
    () => {
        window.open('https://example.com', '_blank');
    },
    () => {
        window.open('https://www.facebook.com/profile.php?id=61558631184828', '_blank');
    },
    () => {
        window.open('https://example.com', '_blank');
    },
    () => {
        window.open('https://example.com', '_blank');
    },
    () => {
        window.open('https://www.linkedin.com/company/grupo-del-valle-sac/?originalSubdomain=pe', '_blank');
    },
]



const sxIconButton ={
    bgcolor: '#303030',
    height: {
        xs: '10vw',
        sm: '6vw',
        md: '40px',
        lg: '3vw',
        xl: '2.5vw'
    },
    width: {
        xs: '10vw',
        sm: '6vw',
        md: '40px',
        lg: '3vw',
        xl: '2.5vw'
    }
}

const widthSpace = {
    xs: '3vw',
    sm: '4vw',
    md: '2vw',
    lg: '2vw',
    xl: '2.5vw'
};


export const Footer = () => {

    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    
    const { width } = widthScreen();
    
    return <Box
        sx={{
            backgroundColor: '#010101',
            color: 'white',
            textAlign: 'start',
            padding: {
                xs: 'none',
                sm: '0 6%  0 4%',
                md: '0 8%  0 6%',
                lg: '0 10%  0 8%',
                xl: '0 15%  0 12%'
            } 
            // height: isSmallScreen ? '90vh' : '50vh',
            // display: 'flex',
            // direction: 'row'
        }}
    >
        <Grid container 
            direction= {isSmallScreen ? 'column' : 'row'} 
            justifyContent='space-between' 
            p={(isSmallScreen) ? 'none' :'5px 10px'}
            // border={1}
            alignItems='space-between' 
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Box
                sx={{width:(isSmallScreen) ? '98vw' : '28vw'}}
            >
                <Grid container
                    paddingLeft={{
                        xs: '14vw',
                        sm: '6vw',
                        md: '5vw',
                        lg: '4vw',
                        xl: '3vw'

                    }}
                    justifyContent='left'
                    // borderColor={'orange'}
                >
                    <Grid container
                        margin=' 50px 0 15px 0'
                        width='80%'
                        direction='row'
                    >
                        <img src={logoHayat} alt="Logo" style={{ boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: 140}} />
                        <Typography style={{color: '#A8A8A8', fontSize:'20px'}} >CLUB PUNTA SAL</Typography>
                    </Grid>

                    <TextField
                        type="email"
                        label="Ingresa tu email para poder recibir novedades"
                        variant="outlined"
                        sx={{
                            // border:1,ffffff
                            margin: '0 10px 10px 0',
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                color: 'rgba(168,168,168,0.8)',
                                borderColor: 'yellow', // Color del borde
                                border: 1,
                                '&:hover': {
                                    borderColor: 'orange',
                                },
                                '&.Mui-focused': {
                                    borderColor: 'transparent', // Cambia el color del borde cuando el TextField está enfocado
                                },
                            },
                            '& .MuiOutlinedInput-root:hover': {
                              borderColor: 'orange', // Cambio de color del borde al pasar el mouse
                            //   border: 1
                            },
                            '& .MuiInputLabel-root': {
                              color: '#A8A8A8',
                            },
                          }} 
                    />
                    <Typography margin={'0 0 15px 0'} style={{color: '#A8A8A8'}}>Conectate con nosotros</Typography>
                    <Grid container direction= 'row' justifyContent='start' sx={{ 
                    }}>
                        <IconButton sx={{...sxIconButton, ':hover': {bgcolor:'#383838', color: '#383838'}}} > <X style={{ color: '#A8A8A8'}}/> </IconButton>
                        <Box width={widthSpace}></Box>
                        <IconButton onClick={Links[1]} sx={{...sxIconButton, ':hover': {bgcolor:'#0866FF', color: '#0866FF'}}} > <Facebook style={{ color: '#A8A8A8'}}/> </IconButton>
                        <Box width={widthSpace}></Box>
                        <IconButton sx={{...sxIconButton, ':hover': {bgcolor:'#DD2A7B', color: '#DD2A7B'}}} > <Instagram style={{ color: '#A8A8A8'}}/> </IconButton>
                        <Box width={widthSpace}></Box>
                        <IconButton sx={{...sxIconButton, ':hover': {bgcolor:'red', color: 'red'}}} > <YouTube style={{ color: '#A8A8A8'}}/> </IconButton>
                        <Box width={widthSpace}></Box>
                        <IconButton onClick={Links[4]} sx={{...sxIconButton, ':hover': {bgcolor:'#0077B5', color: '#0077B5'}}}> <LinkedIn style={{ color: '#A8A8A8'}}/> </IconButton>
                    </Grid>
                </Grid>
            </Box>
            
            <Grid container padding={(isSmallScreen) ? '30px 0 0 14vw' : '60px 0 0 36px'} width={(isSmallScreen) ? '100%' : '22%'} display='flex' flexDirection={(width < 1030) ? 'column' : 'row'}>
                <Grid container width={(width < 1030) ? '100%' :'50%'} direction='column'>
                    <a href="/" style={{fontSize:'20px', padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography sx={{ fontWeight: 'bold' }}>El proyecto</Typography> </a>
                    <a href="/" style={{ padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography sx={{ fontWeight: 'bold' }}>Nosotros</Typography> </a>
                    <a href="/" style={{ padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography sx={{ fontWeight: 'bold' }}>Canal</Typography> </a>
                    <a href="/" style={{ padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography sx={{ fontWeight: 'bold' }}>Redes</Typography> </a>
                    <a href="/" style={{ padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography sx={{ fontWeight: 'bold' }}>Plano</Typography> </a>
                    <a href="/" style={{ padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography sx={{ fontWeight: 'bold' }}>Informes</Typography> </a>
                </Grid>
                <Grid container width={(width < 1030) ? '100%' :'50%'} direction='column'>
                    <a href="/" style={{padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography sx={{ fontWeight: 'bold' }}>Soporte</Typography> </a>
                    <a href="/" style={{padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography sx={{ fontWeight: 'bold' }}>Contáctanos</Typography> </a>
                    <a href="/" style={{padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography sx={{ fontWeight: 'bold' }}>Precios</Typography> </a>
                    <a href="/" style={{padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography sx={{ fontWeight: 'bold' }}>Grupos</Typography> </a>
                    <a href="/" style={{padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography sx={{ fontWeight: 'bold' }}>Oficina</Typography> </a>
                    <a href="/" style={{padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography sx={{ fontWeight: 'bold' }}>Politica de privacidad</Typography> </a>
                </Grid>
            </Grid>

            <Box flexDirection='column' display='flex' justifyContent='start' sx={{width: (isSmallScreen) ? '100%' : '14%'}}>
                <Typography color='#B8B8B8' padding={(isSmallScreen) ? '30px 0 0 14vw' : '60px 0 0 14px'} fontSize={{xs: '20px',sm: '10px',md: '18px', lg: '15px',xl: '15px'}} sx={{ fontWeight: 'bold' }}>Desarrollado por:</Typography> 
                <Box display='flex' justifyContent='center'>
                    <img src={logoGrupoDelValle} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: '80%'}} />        
                </Box>
            </Box>
            <Box padding={(isSmallScreen) ? '30px 0 0 0' : '60px 0 0 0'} sx={{width:(isSmallScreen) ? '100%' : '18%'}}>
                <Grid container direction='column'>
                    <Typography color='#B8B8B8' fontSize={{xs: '20px',sm: '10px',md: '18px', lg: '15px',xl: '15px'}} paddingLeft={'25px'} width='100%' sx={{ fontWeight: 'bold' }}>MAS INFORMACIÓN</Typography>
                    <Box justifyContent='center' display='flex' marginTop='10px'>
                        <video controls controlsList="nodownload" style={{ maxWidth: isSmallScreen ? '50%' : '70%' }}>
                            <source src={videoDemo} type="video/mp4" />
                            Tu navegador no soporta el elemento de video 😞.
                        </video>
                    </Box>
                    <Typography color='#B8B8B8' padding='20px 30px' sx={{ fontWeight: 'bold' }}>Mira nuestros últimos videos del proyecto</Typography>
                </Grid>
            </Box>
        </Grid>
    </Box>

}