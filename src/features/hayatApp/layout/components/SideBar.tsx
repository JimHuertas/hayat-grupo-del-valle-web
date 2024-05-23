import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

// import { useSelector } from 'react-redux';
// import { RootState } from '../../../../store';

import logoHayat from '../../../../assets/hayat-logo-2.png';

interface SideBarProps {
    drawerWidth: number;
    isOpen: boolean;
    handleSidebarToggle?: ()=>void;
}

export const SideBar: React.FC<SideBarProps> = ({ drawerWidth = 240, isOpen, handleSidebarToggle}) => {
    // const { fullName } = useSelector( (state: RootState) => state.auth );
    const [_, setWidthScreen] = useState(window.innerWidth);
    
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const setNewWidthScreen = () => {
            setWidthScreen(window.innerWidth);
        };
        window.addEventListener('resize', setNewWidthScreen);
        return () => {
            window.removeEventListener('resize', setNewWidthScreen);
        };
        
    }, []);

    let counts = 0;
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            counts++;
            if (!(counts%2)  && isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                if(handleSidebarToggle) handleSidebarToggle();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    return (
        <Box ref={sidebarRef}
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                PaperProps={{
                    sx: {
                    backgroundColor: 'rgba(238,238,238,0.8)',
                  }}
                }
                variant='temporary'
                open={isOpen}
                sx={{ 
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar sx={{margin: '10px 0 9px 0'}}>
                    <img src={logoHayat} alt="Logo" style={{ boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', width: 140}} />
                </Toolbar>
                <Divider />
                <List >
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/">
                            <ListItemText primary="Inicio" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/">
                            <ListItemText primary="Contácto" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/">
                            <ListItemText primary="Nosotros" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/">
                            <ListItemText primary="Servicios" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/">
                            <ListItemText primary="Reserva" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
}
