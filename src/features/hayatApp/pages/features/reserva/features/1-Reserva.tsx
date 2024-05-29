import { Box, Grid, Typography } from "@mui/material";

import { heightScreen } from "../../../../hooks/heightScreen";
import urlImage5 from '../../../../../../assets/background-5.webp';
import { InfoFooter } from "../../../../ui/components/InfoFooter";

export const Reserva1 = () => {
    const {height} = heightScreen();
    
    const first_content = (height < 800) ? 800 * (85/100) : height * (70/100);
    const second_content = (height < 800) ? 800 * (20/100): height * (22.7/100);

    return (
        <Box
            bgcolor={'rgba(38,38,38,0.5)'}
            color={'#3DF45D'}
            // border={2}
            sx={{ 
                backgroundAttachment: 'center',
                backgroundImage: `url(${urlImage5})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '80px 0 0 0',
                width: '100%', 
            }}
        >
            <Grid container display='flex' direction='row' >
                <Grid height={first_content} width='12%' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                    <Typography fontWeight='bold' color='white' fontSize='20px' >02</Typography>
                    <Box color='#E3641A' border={3} width='1px' height={'40%'} ></Box>
                    <Box color='white' border={1} width='1px' height={'40%'} ></Box>
                    <Typography fontWeight='bold' color='white' fontSize='20px'>04</Typography>
                </Grid>
            </Grid>

            <InfoFooter sizeContent={second_content} />
        </Box>
    );
}