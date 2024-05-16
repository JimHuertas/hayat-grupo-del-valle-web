import { Theme, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { Footer, NavBar, SideBar } from '../ui/components';
import { ReactNode, useState } from 'react';
import "../ui/css/background.css";

interface AuthLayoutProps {
  children: ReactNode;
}

export const HayatAppLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Box
      sx={{ 
        display: 'relative', 
        flexDirection: 'column',
        minHeight: isSmallScreen ? 'calc(100vh - 56px)' : '100vh',
        minWidth: '100%',
      }} 
      className='animate__animated animate__fadeIn animate__faster'>
        { ( isSidebarOpen ) ? <SideBar drawerWidth={ 230 } isOpen={ isSidebarOpen } handleSidebarToggle={handleSidebarToggle}/> : null }
        <NavBar
          onToggleSidebar={handleSidebarToggle}
        />
        <Box 
            // bgcolor={`${theme}`}
            zIndex={1}
            overflow={'auto'}
            component='main'
            sx={{ flexGrow: 1, p: '0 0 0 0'}}
        >
            {/* <Toolbar /> */}

            { children }
            
        </Box>
        <Footer />
        
    </Box>
  )
}
