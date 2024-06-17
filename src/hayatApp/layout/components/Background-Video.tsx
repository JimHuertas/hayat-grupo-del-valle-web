
import { useState } from 'react';
import './css/background-video.css';
import { Box } from "@mui/material";
import bgpreview from '../../../assets/bg-video.avif';


interface BackgroundVideoProps{
    videoSrc: string; 
}
export const BackgroundVideo:React.FC<BackgroundVideoProps> = ({videoSrc}) => {

    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    return (
        <Box className='video-background-container'
            style={{ backgroundImage: `url(${bgpreview})`, height: '1190px'}}
        >
          <video  className={`video-background ${isVideoLoaded ? 'loaded' : ''}`} autoPlay loop muted
            onCanPlayThrough={handleVideoLoaded}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
    );
}