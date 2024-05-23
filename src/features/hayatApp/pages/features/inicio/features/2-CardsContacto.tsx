import { Box, Typography } from "@mui/material";
import { CardsInfo } from "../components/Cards";

export const CardsContacto2: React.FC = () => {

    return (
    <Box 
        bgcolor={'rgba(238,238,238,0.5)'}
        borderColor={'red'}
        sx={{ 
            padding: 'none',
            width: '100%', 
            height: '700px',
        }}
    >
        <Box height='15%' padding={'0 5%'} alignItems={'center'} justifyContent='space-between' display='flex' flexDirection='row'>
            <Box border={1} margin='0 20px 0 0' color={'red'} height='0' width={'100px'} ></Box>
            <Typography margin='0 20px 0 0' fontSize={{
                xs: '15px',
                sm: '20px',
                md: '20px',
                lg: '23px',
                xl: '24px'
            }} fontWeight={'bold'}> DESCUBRE LAS MEJORES EXPERIENCIAS </Typography>
            <Typography fontSize={{
                xs: '12px',
                sm: '14px',
                md: '18px',
                lg: '20px',
                xl: '24px'
            }} fontWeight={500}> Tendrás inumerables actividades de las cuales podrías disfrutar a los largo de tu estadía con nosotros </Typography>
        </Box>
        <Box height={'80%'} display={'flex'} flexDirection={'row'} alignItems='center' >
            <CardsInfo  />
        </Box>

    </Box>
    );
}