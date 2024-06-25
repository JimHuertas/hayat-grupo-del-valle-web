import { Box, Grid, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { InfoFooter } from "../../../../ui/components/InfoFooter";
import ConsultaAhoraSvg from "../../../../ui/components/TextSVG";

import { countState } from "../../../../hooks/countState";
import { heightScreen } from "../../../../hooks/heightScreen";
import { widthScreen } from "../../../../hooks/widthScreen";

import { AnimatedTypography } from "../../shared/AnimatedTypography";

export const Servicios1: React.FC = () => {

    const {height} = heightScreen();
    const {width} = widthScreen();

    const first_content = (width < 380) ? 620 : 750;
    const second_content = (height < 800) ? 800 * (20/100): 150;

    const { count } = countState();

    const navigate = useNavigate();

    return (
        <Box
            bgcolor={'rgba(38,38,38,0.3)'}
            overflow='hidden'
            sx={{ 
                backgroundAttachment: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '80px 0 0 0',
                width: '100%', 
            }}
        >
            <Grid container display='flex' direction='row' >
                <Grid height={first_content} width='12%' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                    <AnimatedTypography fontWeight='bold' color='white' fontSize='20px' >{(count<1) ? '01' : `0${count}`}</AnimatedTypography>
                    <Box sx={{transition: 'height 0.5s ease-out'}} color='#E3641A' border={3} width='1px' height={(count === 0) ? '16%' : `${16*count}%`} ></Box>
                    <Box sx={{transition: 'height 0.5s ease-out'}}  color='white' border={1} width='1px' height={(count === 0) ? '64%' : `${80-(16*count)}%`} ></Box>
                    <AnimatedTypography fontWeight='bold' color='white' fontSize='20px'>05</AnimatedTypography>
                </Grid>

                <Box height={first_content} width='88%'>
                    <AnimatedTypography  
                        fontFamily='Archivo Black' 
                        padding={{
                            xs: '80px 6vw 0 0',
                            sm: '150px 5vw 0 0',
                            md: '155px 15vw 0 0',
                            lg: '150px 25vw 0 0',
                            xl: '160px 25vw 0 0'
                        }} 
                        fontSize={{
                            xs: '6vw',
                            sm: '4.5vw',
                            md: '4.5vw',
                            lg: '45px',
                            xl: '45px'
                        }} 
                        color='#F8F8F8'
                    > AMBIENTE PERFECTO
                    </AnimatedTypography>
                    <AnimatedTypography 
                        fontFamily='Archivo Black' 
                        padding={{
                            xs: '0 6vw 0 0',
                            sm: '0 5vw 0 0',
                            md: '0 15vw 0 0',
                            lg: '0 25vw 0 0',
                            xl: '0 25vw 0 0'
                        }} 
                        fontSize={{
                            xs: '6vw',
                            sm: '4.5vw',
                            md: '4.5vw',
                            lg: '45px',
                            xl: '45px'
                        }} 
                        color='#E3641A'
                    > CON EL CONFORT QUE TU MERECES
                    </AnimatedTypography>
                    <AnimatedTypography 
                        color='#F8F8F8' 
                        padding={{
                            xs: '40px 7vw 30px 0',
                            sm: '50px 5vw 20px 0',
                            md: '30px 24vw 30px 0',
                            lg: '20px 20vw 30px 0',
                            xl: '30px 25vw 18px 0'
                        }} 
                        fontSize={{
                            xs: '13px',
                            sm: '14px',
                            md: '16px',
                            lg: '16px',
                            xl: '16px'
                        }} fontWeight='500'
                    > Se parte de nuestro exclusivo club. ''vive un mar de emociones'', donde no podras perderte en una experiencia inolvidable.
                    Ofrecemos un escape idílico con acceso privado a la suave arena dorada y las aguas cristalinas del océano. Disfruta de una variedad de comodidadesde lujo,
                    desde exquisitos restaurantes y bares frente al mar hasta comodas cabañas y tumbonas para descansar bajo el cálido sol tropical.
                    </AnimatedTypography>
                    {/* <CustomRoundedButton
                        background='#E3641A'
                        onClick={()=>{}}
                        className=""
                    > <TextImage fontSize="20px" text="Registrate" backgroundPosition="bottom" urlImage={background1} />
                    </CustomRoundedButton> */}
                    <IconButton  sx={{ height:'50px', width: (width < 550) ? '200px' : '280px', borderRadius:'30px' }}  onClick={()=>{navigate('/contacto#form-hayat')}}>
                        <ConsultaAhoraSvg style={{ width: 300, height: (width < 650) ? 30 : 40 }} />
                    </IconButton>
                    
                    {/* <Box margin={'12px 0 0 0'}>
                        <CustomRoundedButton
                            boxShadow=''
                            background="white"
                            onClick={()=>{navigate('/contacto#form-hayat')}}
                            className=""
                        >  <TextImage fontSize="22px" text="¡Consulta Ahora!" backgroundPosition="bottom 39% left 20% " />
                        </CustomRoundedButton>
                    </Box> */}
                </Box>
            </Grid>

            <InfoFooter sizeContent={second_content} />
        </Box>
    );
}