import { Facebook, Instagram, YouTube, LinkedIn, Send } from "@mui/icons-material"
import { Box, Grid, IconButton, TextField, Theme, Typography, useMediaQuery } from "@mui/material"
import { widthScreen } from "../../hooks/widthScreen";

import logoHayat from '../../../assets/hayat-logo-2.png';
import logoGrupoDelValle from '../../../assets/grupo-del-valle-white.png';
import { TikTokIcon } from "./TikTokIcon";

const Links = [
    () => {
        window.open('https://www.tiktok.com/@hayatpuntasal?_t=8myhmTJj35S&_r=1', '_blank');
    },
    () => {
        window.open('https://www.facebook.com/profile.php?id=61558631184828', '_blank');
    },
    () => {
        window.open('https://youtube.com/@hayatperu?si=oMJ6JK3bg1FmAH-o', '_blank');
    },
    () => {
        window.open('https://www.instagram.com/hayatperu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
    },
    () => {
        window.open('https://www.linkedin.com/company/grupo-del-valle-sac/?originalSubdomain=pe', '_blank');
    },
]



const sxIconButton ={
    marginBottom: '5%',
    bgcolor: '#303030',
    height: {
        xs: '10vw',
        sm: '6vw',
        md: '33px',
        lg: '3vw',
        xl: '2.5vw'
    },
    width: {
        xs: '10vw',
        sm: '6vw',
        md: '33px',
        lg: '3vw',
        xl: '2.5vw'
    }
}

const widthSpace = {
    xs: '3vw',
    sm: '4vw',
    md: '1vw',
    lg: '1.5vw',
    xl: '2.5vw'
};


export const Footer = () => {
    const fontInfoSize = {
        xs: '14px',
        sm: '12px', 
        md: '14px', 
        lg: '14px',
        xl: '14px'
    }

    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    
    const { width } = widthScreen();
    
    return <Box
        sx={{
            backgroundColor: '#010101',
            color: 'white',
            textAlign: 'start',
            padding: {
                xs: 'none',
                sm: '0 0  0 4%',
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
            p={(isSmallScreen) ? 'none' :'5px 0 0 10px'}
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
                >
                    <Grid container
                        margin=' 50px 0 15px 0'
                        width='80%'
                        direction='row'
                    >
                        <img src={logoHayat} alt="Logo" style={{ boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: 140}} />
                        <Typography style={{ fontWeight:'500', alignContent:'end', color: '#A8A8A8', fontSize:'20px'}} >CLUB PUNTA SAL</Typography>
                    </Grid>
                    <Typography m='0 0 15px 0' >Ingresa tu e-mail para poder recibir novedades</Typography>
                    <Box display='flex' width={'100%'} >
                        
                        <TextField
                            InputProps={{
                                sx: {
                                    fontSize: "12px",
                                },
                                endAdornment: (
                                    <IconButton >
                                        <Send sx={{color:'white'}}/>
                                    </IconButton>)
                            }}
                            type="email"
                            label={ (width < 920) ? 'E-mail' :"Ingresa tu e-mail"}
                            variant="outlined"
                            sx={{
                                margin: '0 10px 10px 0',
                                width: '95%',
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
                    </Box>
                    <Typography margin={'0 0 15px 0'} style={{color: '#A8A8A8'}}>Conectate con nosotros</Typography>
                    <Grid container direction= 'row' justifyContent='start'>
                        <IconButton onClick={Links[0]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, #25f4ee, #000000, #fe2c55)', color: '#383838'}}} > <TikTokIcon size='15px' color={'#A8A8A8'} /> </IconButton>
                        <Box width={widthSpace}></Box>
                        <IconButton onClick={Links[1]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, #0866FF, #000000, #0866FF)', color: '#0866FF'}}} > <Facebook style={{ color: '#A8A8A8'}}/> </IconButton>
                        <Box width={widthSpace}></Box>
                        <IconButton onClick={Links[2]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, red, #000000, red)', color: 'red'}}} > <YouTube style={{ color: '#A8A8A8'}}/> </IconButton>
                        <Box width={widthSpace}></Box>
                        <IconButton onClick={Links[3]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, #405de6, #5b51d8, #833ab4, #c13584, #e1306d, #fd1d1d,#f56040, #f77737, #fcaf45, #ffdc80)', color: '#DD2A7B'}}} > <Instagram style={{ color: '#A8A8A8'}}/> </IconButton>
                        <Box width={widthSpace}></Box>
                        <IconButton onClick={Links[4]} sx={{...sxIconButton, ':hover': {background:'linear-gradient(to right bottom, #0077B5, #000000, #0077B5)', color: '#0077B5'}}}> <LinkedIn style={{ color: '#A8A8A8'}}/> </IconButton>
                    </Grid>
                </Grid>
            </Box>
            
            <Grid container padding={
                (isSmallScreen) 
                ? '30px 0 0 14vw' 
                : (width < 1110) ? '60px 0 0 10px' : '60px 0 0 36px'} width={(isSmallScreen) ? '100%' : '21%'} display='flex' 
                flexDirection={(width < 1030) 
                    ? (width < 600) ? 'row' : 'column' 
                    : 'row'}>
                <Grid container width={(width < 1030) 
                    ? (width < 600) ? '35%' : '80%' 
                    :'57%'} direction='column'>
                    <a href="/servicios" style={{fontSize:'20px', padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography fontSize={fontInfoSize} sx={{ fontWeight: 'bold' }}>El proyecto</Typography> </a>
                    {/* <a href="/" style={{ padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography fontSize={fontInfoSize} sx={{ fontWeight: 'bold' }}>Canal</Typography> </a> */}
                    <a href="/nosotros" style={{ padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography fontSize={fontInfoSize} sx={{ fontWeight: 'bold' }}>Nosotros</Typography> </a>
                    <a href="https://linktr.ee/grupodelvalle" target="_blank" style={{ padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography fontSize={fontInfoSize} sx={{ fontWeight: 'bold' }}>Redes</Typography> </a>
                    <a href="/contacto" style={{ padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography fontSize={fontInfoSize} sx={{ fontWeight: 'bold' }}>Informes</Typography> </a>
                    <a href="/contacto" style={{padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography fontSize={fontInfoSize} sx={{ fontWeight: 'bold' }}>Contáctanos</Typography> </a>
                </Grid>
                <Grid container width={(width < 1030) 
                    ? (width < 600) 
                    ? '50%' 
                    : '80%'
                    :'43%'} direction='column'>
                    <a href="/nosotros" style={{padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography fontSize={fontInfoSize} sx={{ fontWeight: 'bold' }}>Grupos</Typography> </a>
                    <a href="/nosotros" style={{padding: '0 0 10px 0', color: '#B8B8B8', textDecoration: 'none'}}><Typography fontSize={fontInfoSize} sx={{ fontWeight: 'bold' }}>Oficina</Typography> </a>
                        <a style={{ padding: '0 0 10px 0', color: '#484848', textDecoration: 'none'}}><Typography fontSize={fontInfoSize} sx={{ fontWeight: 'bold' }}>Plano</Typography> </a>
                    <a style={{padding: '0 0 10px 0', color: '#484848', textDecoration: 'none'}}><Typography fontSize={fontInfoSize} sx={{ fontWeight: 'bold' }}>Politica de privacidad</Typography> </a>
                    <a style={{padding: '0 0 10px 0', color: '#484848', textDecoration: 'none'}}><Typography fontSize={fontInfoSize} sx={{ fontWeight: 'bold' }}>Precios</Typography> </a>
                </Grid>
            </Grid>

            <Box flexDirection='column' display='flex' justifyContent='start' sx={{width: (isSmallScreen) ? '100%' : (width < 1450) ? '18%' : '17%' }}>
                <Typography color='#B8B8B8' padding={(isSmallScreen) ? '30px 0 0 14vw' : '60px 0 15px 14px'} fontSize={{xs: '20px',sm: '10px',md: '18px', lg: '15px',xl: '15px'}} sx={{ fontWeight: 'bold' }}>Desarrollado por:</Typography> 
                <Box display='flex' justifyContent='center'>
                    <img src={logoGrupoDelValle} alt="Logo" style={{ textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width:(width< 600) ? '30%' : '97%'}} />        
                </Box>
            </Box>

            <Box padding={(isSmallScreen) ? '30px 0 0 0' : '60px 0 0 0'} sx={{width:(isSmallScreen) ? '100%' : '22%'}}>
                <Grid container direction='column'>
                    <Typography color='#B8B8B8' fontSize={{xs: '20px',sm: '10px', md: '18px', lg: '15px',xl: '15px'}} paddingLeft={(width < 600) ? '60px' :'25px'} width='100%' sx={{ fontWeight: 'bold' }}>MAS INFORMACIÓN</Typography>
                    <Box justifyContent='center' display='flex' marginTop='10px'>
                        <iframe width={isSmallScreen ? '70%' : '100%'} height={isSmallScreen ? '500px' : '350px'} style={{ border:1, maxWidth: isSmallScreen ? '60%' : '90%' }}
                                src="https://youtube.com/embed/sapiVleNp68?si=sEoY2KQPDGtdiA3g" 
                                title="Un mar de experiencias"
                        >Tu navegador no soporta el elemento de video 😞.</iframe>
                    </Box>
                    <Typography color='#B8B8B8' padding='20px 30px' sx={{ fontWeight: 'bold' }}>Mira nuestros últimos videos del proyecto</Typography>
                </Grid>
            </Box>
        </Grid>
    </Box>

}