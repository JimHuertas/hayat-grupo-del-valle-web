import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';

// import { startLogout } from '../../../../store/auth';
// import { useAppDispatch } from '../../../../store';
import { CustomButton } from '.';
import { MenuOptions } from '../config/menu-options';
import { selectedOption } from '../../hooks/selectedOption';
import { CustomRoundedButton } from './CustomRoundedButton';

import logoHayat from '../../../../assets/hayat-logo.png';
import background1 from '../../../../assets/background-1.webp';

import '../css/CustomRoundedButton.css';
import { TextImage } from './TextImage';
import { useState } from 'react';
import { MenuOutlined } from '@mui/icons-material';
import { widthScreen } from '../../hooks/widthScreen';

interface NavBarProps {
    onToggleSidebar: ()=>void
}

export const NavBar: React.FC<NavBarProps> = ({onToggleSidebar}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true); 
    
    const { width } = widthScreen();
    const { handleButtonClick, selectedButton} =  selectedOption(0);
    
    // const dispatch = useAppDispatch();

    // const onLogout = () => {
    //     dispatch( startLogout() );
    // }

    const handleToggleSidebar = () => {
        setIsSideBarOpen(!isSideBarOpen);
        if (onToggleSidebar) {
            onToggleSidebar();
        }
    };

    const handleOnClickLogo = ()=>{
        
    }

  return (
    <AppBar 
        position='fixed'
        sx={{ 
            top: 0,
            left: 0,
            right: 0,
            bgcolor: 'transparent',
            width: { sm: '100%'},
            height: '80px',
            zIndex: 2
        }}
    >
        <Toolbar style={{  alignContent: 'center', justifyContent: 'center' }}>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Box width='10%' display='flex' flexDirection='row' alignContent='center'>
                    {(width < 925) 
                    ? <IconButton onClick={handleToggleSidebar} sx={{ margin: (width < 431) ? '40px 0 0 0' :'60px 0 0 0' ,alignContent: 'center', width: '40px', height: '40px', background: 'rgba(238,238,238,0.9)'}}> 
                        <MenuOutlined sx={{color:'#E3641A'}}  />
                      </IconButton> 
                    : <Box width={(width < 431) ? '1px' : '6%'} /> }
                    
                    <IconButton disableRipple className='logo-button' edge="start" color="inherit" aria-label="menu" onClick={handleOnClickLogo}>
                        <img src={logoHayat} alt="Logo" style={{ boxShadow: 'none', transition: 'box-shadow 0.1s', width: (width < 431) ? 100 : 140, borderRadius: '0' }} />
                    </IconButton>
                </Box>
                <Box width={(width < 431) ? '1px' : '4.2vw'} ></Box>
                <Box>
                {width < 925 ? null : MenuOptions.map((option, index) => (
                    (index !== 4)
                    ? <CustomButton
                        key={index} 
                        className={`button ${selectedButton === index ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(index)} >
                        <Typography color="#F8F8F8" fontSize= 'clamp(13px, 1vw, 18px)' fontWeight="fontWeightBold" bgcolor={'transparent'} >{option.title}</Typography>
                      </CustomButton>
                    : <CustomRoundedButton
                        background='#F8F8F8'
                        key={index}
                        className={`rounded-button ${selectedButton === index ? 'selected-background' : ''}`}
                        onClick={()=>handleButtonClick(index)}
                      >
                        <TextImage 
                            backgroundPosition='center 10%'
                            text='RESERVA'
                            urlImage={background1}  
                        />
                      </CustomRoundedButton>
                ))
                }
                </Box>
                <Box sx={{
                    width: (width < 999 )
                      ? '0' 
                      : {
                        xl: '24vw', 
                        lg: '12vw', 
                        md: '11px', 
                      },
                }} 
                ></Box>
                <Box display='flex' flexDirection='row'>
                <Button
                    sx={{ 
                        color: '#F8F8F8',
                        background: 'trasparent',
                        borderRadius: '30px',
                        height: '30px',
                        "&.MuiButtonBase-root:hover": { 
                            backgroundColor: "transparent",
                        },
                        fontWeight: 'bold',
                        fontSize: (width < 431) ? '12px' : '15px'
                    }}
                    onClick={()=>{}}
                >
                    Registrate
                </Button>
                <Box width='1vw'></Box>
                <Button
                    sx={{ 
                        color: '#F8F8F8',
                        background: '#E3641A',
                        borderRadius: '30px',
                        height: '30px',
                        fontWeight: 'bold',
                        "&.MuiButtonBase-root:hover": { 
                            backgroundColor: "green",
                        },
                        fontSize: (width < 431) ? '12px' : '14px'
                    }}
                    onClick={()=>{}}
                >
                    Ingresar
                </Button>
                </Box>
                
                {/* <IconButton 
                    color='error'
                    onClick={ onLogout }
                >
                    <LogoutOutlined />
                </IconButton> */}
            </Grid>

        </Toolbar>
    </AppBar>
  )
}