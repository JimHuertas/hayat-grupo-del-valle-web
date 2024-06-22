
import './css/background-image.css';
import { Box } from "@mui/material";


interface BackgroundImageProps{
    imageSrc: string; 
}
export const BackgroundImage:React.FC<BackgroundImageProps> = ({imageSrc}) => {

    return (
    <Box>
      <img src={imageSrc} className='image-background' alt="Arequipa Catedral" />
    </Box>
    );
}