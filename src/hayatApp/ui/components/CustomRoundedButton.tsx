import React from 'react';
import { Button } from '@mui/material';
import '../css/CustomRoundedButton.css';

interface CustomRoundedButtonProps {
    children: React.ReactNode;
    selected?: boolean;
    boxShadow?: string;
    background: string;
    padding?: string;
    className: string;
    onClick?: () => void;
}

export const CustomRoundedButton: React.FC<CustomRoundedButtonProps> = ({ padding = '20px 20px', background, boxShadow = 'inset 5px 5px 10px rgba(0, 0, 0, 0.5)'  , children, selected = false, className, onClick, ...props}) => {

  return (
      <Button
        sx={{ 
          padding: padding,
          background: background,
          borderRadius: '30px',
          boxShadow: boxShadow,
          height: '30px',
          "&.MuiButtonBase-root:hover": { 
            backgroundColor: "primary.light",
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