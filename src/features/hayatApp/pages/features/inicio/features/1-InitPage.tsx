import { Box, Grid, Typography } from "@mui/material";

import { CustomRoundedButton } from "../../../../ui/components/CustomRoundedButton";
import urlImage from '../../../../../../assets/background-1.webp';
import { TextImage } from "../../../../ui/components/TextImage";
import background1 from '../../../../../../assets/background-1.webp';

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
                padding: '85px 0 0 0',
                width: '100%', 
                height: '100vh',
            }}
        >
            <Grid container direction='row' >
                <Grid border={1} width='12%' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                    <Typography fontWeight='bold' color='white' fontSize='20px' >01</Typography>
                    <Box color='#E3641A' border={2} width='1px' height={'30vh'} ></Box>
                    <Box color='white' border={1} width='1px' height={'30vh'} ></Box>
                    <Typography fontWeight='bold' color='white' fontSize='20px'>04</Typography>
                </Grid>

                <Box border={1} width='88%'>
                    <Typography fontFamily='Archivo Black' border={1} padding='160px 26vw 0 0' fontSize='4.5vw' color='#F8F8F8'> 
                        ¡EMPIEZA A VIVIR UN MAR DE EXPERIENCIAS EN ESTE PARAÍSO!
                    </Typography>
                    
                    <Typography color='#F8F8F8' padding='30px 44vw 20px 0' fontSize='1.0vw' fontWeight='500'> 
                        ''Bienvenido al paraíso en nuestro exclusivo club. ''vive un mar de emociones'', donde cada momento se convierte
                        en una experiencia inolvidavle. Ofrecemos un escape idílico con acceso privado a la suave arena dorada y las aguas
                        cristalinas del océano. Disfruta de una variedad de comodidades de lujo, desde exquisitos restaurantes y bares 
                        frente al mar hasta cómodas cabañas y tumbonas para descansar bajo el cálido sol tropical''.
                    </Typography>
                    <CustomRoundedButton
                        background='#E3641A'
                        onClick={()=>{}}
                        className=""
                    > <TextImage fontSize="20px" text="Registrate" backgroundPosition="bottom" urlImage={background1} />
                    </CustomRoundedButton>
                    <CustomRoundedButton
                        background="white"
                        onClick={()=>{}}
                        className=""
                    >  <TextImage fontSize="20px" text="¡Consulta Ahora!" backgroundPosition="bottom" urlImage={background1} />
                    </CustomRoundedButton>
                </Box>
            </Grid>
        </Box>
    );
}