import { Box } from '@mui/system';
import { Footer, NavBar, SideBar } from '../ui/components';
import { ReactNode, useRef, useState } from 'react';
import './components/css/transitions.css';

import { bg_images } from '../config/bg_options';

import { BackgroundSlider } from './components/Background-Slider';
import { BackgroundVideo } from './components/Background-Video';


interface AuthLayoutProps {
  children: ReactNode;
  type?: string;
}

export const HayatAppLayout: React.FC<AuthLayoutProps> = ({type='slider', children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box
      sx={{ 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderColor:'green',
        display: 'relative', 
        flexDirection: 'column',
        // minHeight: '100vh',
        // minWidth: '90%',
      }} 
      // className="fade-in-out"
      >
        {(type === 'slider') 
          ? <BackgroundSlider images={bg_images} interval={500} contentRef={contentRef}/>
          : (type === 'video')
            ? <BackgroundVideo videoSrc='https://storage.googleapis.com/videos-mardeexperiencias/intro-hayat.mov' />
            : null
            // : <BackgroundImage imageSrc={fondoImagen}  />
        }
        { ( isSidebarOpen ) ? <SideBar drawerWidth={ 230 } isOpen={ isSidebarOpen } handleSidebarToggle={handleSidebarToggle}/> : null }
        <NavBar
          onToggleSidebar={handleSidebarToggle}
        />
        <Box
          component='main'
          overflow={'auto'}
          zIndex={1}
          ref={contentRef}
          sx={{ flexGrow: 1, p: '0 0 0 0', overflow: 'auto',
          position: 'relative'}}
        >
          { children }  
        </Box>
        <Footer />
        
    </Box>
  )
}
