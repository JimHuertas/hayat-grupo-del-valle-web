import { Box, Grid, Typography } from "@mui/material";

import { CustomRoundedButton } from "../../../../ui/components/CustomRoundedButton";
import { TextImage } from "../../../../ui/components/TextImage";

import urlImage from '../../../../../../assets/background-1.webp';
import background1 from '../../../../../../assets/background-1.webp';

import { heightScreen } from "../../../../hooks/heightScreen";
import { InfoFooter } from "../../../../ui/components/InfoFooter";


export const InitPage1: React.FC = () => {

    const {height} = heightScreen();
    
    const first_content = (height < 800) ? 800 * (85/100) : height * (70/100);
    const second_content = (height < 800) ? 800 * (20/100): height * (22.7/100);

    return (
        <Box
            bgcolor={'rgba(38,38,38,0.5)'}
            sx={{ 
                backgroundAttachment: 'center',
                backgroundImage: `url(${urlImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '80px 0 0 0',
                width: '100%', 
            }}
        >
            <Grid container display='flex' direction='row' >
                <Grid height={first_content} width='12%' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                    <Typography fontWeight='bold' color='white' fontSize='20px' >01</Typography>
                    <Box color='#E3641A' border={3} width='1px' height={'40%'} ></Box>
                    <Box color='white' border={1} width='1px' height={'40%'} ></Box>
                    <Typography fontWeight='bold' color='white' fontSize='20px'>04</Typography>
                </Grid>

                <Box height={first_content} width='88%'>
                    <Typography  
                        fontFamily='Archivo Black' 
                        padding={{
                            xs: '40px 6vw 0 0',
                            sm: '50px 5vw 0 0',
                            md: '55px 15vw 0 0',
                            lg: '40px 25vw 0 0',
                            xl: '80px 25vw 0 0'
                        }} 
                        fontSize={{
                            xs: '6vw',
                            sm: '6vw',
                            md: '5vw',
                            lg: '50px',
                            xl: '60px'
                        }} 
                        color='#F8F8F8'
                    > ¡EMPIEZA A VIVIR UN MAR DE EXPERIENCIAS EN ESTE PARAÍSO!
                    </Typography>
                    
                    <Typography 
                        color='#F8F8F8' 
                        padding={{
                            xs: '40px 7vw 0 0',
                            sm: '50px 5vw 20px 0',
                            md: '30px 24vw 30px 0',
                            lg: '20px 20vw 30px 0',
                            xl: '30px 25vw 18px 0'
                        }} 
                        fontSize={{
                            xs: '15px',
                            sm: '20px',
                            md: '20px',
                            lg: '20px',
                            xl: '21px'
                        }} fontWeight='500'
                    > ''Bienvenido al paraíso en nuestro exclusivo club. ''vive un mar de emociones'', donde cada momento se convierte
                        en una experiencia inolvidavle. Ofrecemos un escape idílico con acceso privado a la suave arena dorada y las aguas
                        cristalinas del océano. Disfruta de una variedad de comodidades de lujo, desde exquisitos restaurantes y bares 
                        frente al mar hasta cómodas cabañas y tumbonas para descansar bajo el cálido sol tropical''.
                    </Typography>
                    {/* <CustomRoundedButton
                        background='#E3641A'
                        onClick={()=>{}}
                        className=""
                    > <TextImage fontSize="20px" text="Registrate" backgroundPosition="bottom" urlImage={background1} />
                    </CustomRoundedButton> */}
                    <Box margin={'12px 0 0 0'}>
                        <CustomRoundedButton
                            boxShadow=''
                            background="white"
                            onClick={()=>{}}
                            className=""
                        >  <TextImage fontSize="25px" text="¡Consulta Ahora!" backgroundPosition="bottom" urlImage={background1} />
                        </CustomRoundedButton>
                    </Box>
                </Box>
            </Grid>

            <InfoFooter sizeContent={second_content} />
        </Box>
    );
}