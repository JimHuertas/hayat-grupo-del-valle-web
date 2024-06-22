import './css/collagePhotos.css';

import casaPLaya from '../../../../../assets/casa-playa.jpg';
import { Box } from '@mui/material';
import { widthScreen } from '../../../../hooks/widthScreen';

interface MovingImageEffectProps{
    images: string[];
}

export const MovingImageEffect = () => {

    const {width} = widthScreen();

    const photos = [
        casaPLaya,
        casaPLaya,
        casaPLaya,
        casaPLaya,
        casaPLaya,
        casaPLaya,
        casaPLaya,
        casaPLaya,
    ];
  
    return (
    <Box
        sx={{
          width: '90%',
          height: (width < 430 ) ? '80%' : '550px',
          overflowY: 'scroll',
          '&::-webkit-scrollbar': {
            width: '12px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px',
          },
        }}
        >
        <Box display={'grid'} gridTemplateColumns="repeat(12, 1fr)" gap={2} width={'100%'} >
            {photos.map((photo, index) => (
            <div key={index} className={`photo-container ${index}`}>
                <Box gridColumn="span 8" >
                    <img key={index} className="photo" src={photo} alt={`photo-${index}`} />
                </Box>
                <div className="overlay">
                <div className="overlay-content">
                    <h2>{'GAAA'}</h2>
                    <div className="icons">
                    <div className="icon">⭐</div>
                    <div className="icon">🔍</div>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </Box>
            
    </Box>
    );
  };