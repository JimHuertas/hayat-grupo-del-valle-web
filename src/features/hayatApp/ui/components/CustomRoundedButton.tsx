import React from 'react';
import { Button } from '@mui/material';
import '../css/CustomRoundedButton.css';

interface CustomRoundedButtonProps {
    children: React.ReactNode;
    selected?: boolean;
    background: string;
    className: string;
    onClick?: () => void;
}

export const CustomRoundedButton: React.FC<CustomRoundedButtonProps> = ({background, children, selected = false, className, onClick, ...props}) => {

  return (
      <Button
        sx={{ 
          // mr: '10vw',
          background: background,
          borderRadius: '30px',
          height: '30px',
          "&.MuiButtonBase-root:hover": { 
            backgroundColor: "orange",
          },
        }}
        className={className}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
  );
};