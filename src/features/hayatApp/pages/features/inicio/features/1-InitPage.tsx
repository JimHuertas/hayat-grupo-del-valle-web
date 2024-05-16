import { Box } from "@mui/material";
import urlImage from '../../../../../../assets/background-1.webp';

export const InitPage1: React.FC = () => {

    return (
        <Box 
            bgcolor={'rgba(38,38,38,0.5)'}
            color={'#3DF45D'}
            border={2}
            sx={{ 
                backgroundAttachment: 'center',
                backgroundImage: `url(${urlImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: 'none',
                width: '100%', 
                height: '100vh',
            }}
        >
            
        </Box>
    );
}