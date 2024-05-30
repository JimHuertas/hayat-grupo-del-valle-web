import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CustomButton } from '../../ui/components';
import { MenuOptions } from '../../ui/config/menu-options';
import { CustomRoundedButton } from '../../ui/components/CustomRoundedButton';
import { TextImage } from '../../ui/components/TextImage';
import '../../ui/css/CustomRoundedButton.css';
import './css/navBar.css';

import { selectedOption } from '../../hooks/selectedOption';
import { widthScreen } from '../../hooks/widthScreen';

import logoHayat from '../../../../assets/hayat-logo.png';

// import { startLogout } from '../../../../store/auth';
// import { useAppDispatch } from '../../../../store';
import { RootState } from '../../../../store';

interface NavBarProps {
    onToggleSidebar: ()=>void;
}

export const NavBar: React.FC<NavBarProps> = ({onToggleSidebar}) => {
    
    const [isSideBarOpen, setIsSideBarOpen] = useState(true); 
    
    const { width } = widthScreen();
    
    const navigate = useNavigate();
    
    const { handleButtonClick } =  selectedOption();

    let indexNav= useSelector((state: RootState) => state.nabBar.index);
    
    const [showAppBar, setShowAppBar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setShowAppBar(false);
            } else {
                setShowAppBar(true);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToggleSidebar = () => {
        setIsSideBarOpen(!isSideBarOpen);
        if (onToggleSidebar) {
            onToggleSidebar();
        }
    };

    const handleOnClickLogo = ()=>{
        navigate('/');
    }

  return (
    <AppBar 
        position='fixed'
        sx={{ 
            transition: 'top 0.7s ease-in-out',
            top: (showAppBar) ? 0 : '-100px',
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
                <Box height='60px' justifyItems='center' display='flex' flexDirection='row' alignItems='center'>
                    {(width < 935) 
                    ? <IconButton onClick={handleToggleSidebar} sx={{ alignContent: 'center', width: '40px', height: '40px', background: 'rgba(238,238,238,0.9)'}}> 
                        <MenuOutlined sx={{color:'#E3641A'}}  />
                      </IconButton> 
                    : <Box  width={(width < 431) ? '1px' : '6%'} /> }
                    
                    <Button sx={{ height: '100%' }} disableRipple  color="inherit" aria-label="menu" onClick={handleOnClickLogo}>
                        <img src={logoHayat} alt="Logo" style={{ padding:'none', margin:'none', borderColor:'white', boxShadow: 'none', transition: 'box-shadow 0.1s', width: (width < 440) ? 80 : 120, borderRadius: '0' }} />
                    </Button>
                </Box>
                <Box width={(width < 440) ? '1px' : (width < 990) ? '1px' : '4.2vw'} />
                <Box>
                {width < 935 ? null : MenuOptions.map((option, index) => (
                    (index !== 4)
                    ? <CustomButton
                        key={index} 
                        className={`button ${indexNav === index ? 'selected' : ''}`}
                        onClick={() => {
                            handleButtonClick(index)
                        }} >
                        <Typography color="#F8F8F8" fontSize= 'clamp(13px, 1vw, 18px)' fontWeight="fontWeightBold" bgcolor={'transparent'} >{option.title}</Typography>
                      </CustomButton>
                    : <CustomRoundedButton
                        background='#F8F8F8'
                        boxShadow=''
                        padding=''
                        key={index}
                        className={`rounded-button ${indexNav === index ? 'selected-background' : ''}`}
                        onClick={()=>{
                            handleButtonClick(index)
                        }}
                      >
                        <TextImage 
                            backgroundPosition='top'
                            text='RESERVA'
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
                {/* <Box display='flex' flexDirection='row'>
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
                </Box> */}
                
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

 // const dispatch = useAppDispatch();

    // const onLogout = () => {
    //     dispatch( startLogout() );
    // }
    