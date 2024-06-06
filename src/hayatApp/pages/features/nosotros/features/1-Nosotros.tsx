import { Box, Grid, Typography } from "@mui/material";

import { heightScreen } from "../../../../hooks/heightScreen";
import { InfoFooter } from "../../../../ui/components/InfoFooter";
import { countState } from "../../../../hooks/countState";

export const Nosotros1 = () => {
    const {height} = heightScreen();
    
    const first_content = (height < 800) ? 800 * (85/100) : height * (70/100);
    const second_content = (height < 800) ? 800 * (20/100): height * (22.7/100);

    const { count } = countState();

    return (
        <Box
            bgcolor={'rgba(38,38,38,0.3)'}
            sx={{ 
                backgroundAttachment: 'center',
                // backgroundImage: `url(${urlImage3})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '80px 0 0 0',
                width: '100%', 
            }}
        >
            <Grid container display='flex' direction='row' >
                <Grid height={first_content} width='12%' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                    <Typography fontWeight='bold' color='white' fontSize='20px' >{(count<1) ? '01' : `0${count}`}</Typography>
                    <Box color='#E3641A' border={3} width='1px' height={'40%'} ></Box>
                    <Box color='white' border={1} width='1px' height={'40%'} ></Box>
                    <Typography fontWeight='bold' color='white' fontSize='20px'>05</Typography>
                </Grid>
                <Grid>
                    

                </Grid>
            </Grid>

            <InfoFooter sizeContent={second_content} />
        </Box>
    );
}