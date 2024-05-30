import { Box, Button, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";

import { heightScreen } from "../../../../hooks/heightScreen";
import { widthScreen } from "../../../../hooks/widthScreen";

import girlBeach from "../../../../../../assets/girl-beach.png";

import { InfoFooter } from "../../../../ui/components/InfoFooter";
import { CustomTextField, Underline } from "../../../../ui/components/CustomTextField";
import { useForm } from "../../../../hooks/useForm";
import { validarNumero } from "../../../../helpers/numberValitador";
import { useSelectItems } from "../../../../hooks/userSelectItems";
import { departamentosPeru } from "../../../../config/departamentos";
import { alertSwap } from "./hooks/alertSwap";
import { Alert } from "./components/CustomAlert";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../../../store";
import { SendMailStatus } from "../../../../../shared/service/config";
import { startSendingMail } from "../../../../../../store/mail";


const formValidations: FormValidation = {
    nombres: [ (value) =>  value.length > 0, 'El nombre es obligatorio para poder reconocerte'],
    apellidos: [ (value) => value.length > 0, 'El apellido es obligatorio para poder reconocerte' ],
    correo:  [ (value) => value.includes('@'), 'Ingrese un correo valido'],
    numero: [ (value) => validarNumero(value), 'Ingrese un numero valido']
}

export const Contacto1 = () => {

    const { alert, handleCloseAlert, handleShowAlert } = alertSwap();
    const dispatch = useAppDispatch();

    const {width} = widthScreen();
    const {height} = heightScreen();
    const first_content = (height < 1000) 
        ? (height < 400 && width < 1070) ? height * (390/100) : 1000 * (140/100) 
        : height * (117/100);
    const second_content = (height < 1000) ? 1000 * (20/100): height * (22.8/100);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const mailState = useSelector((state: RootState) => state.mail );

    //FORM DATA
    const { selectedItem, handleCategoryChange } = useSelectItems(); 
    const { nombresValid, apellidosValid, correoValid, numeroValid, isFormValid, nombres, apellidos, correo, confirmCorreo, numero, onInputChange } = useForm({
        nombres: '',
        apellidos: '',
        correo: '',
        confirmCorreo: '',
        numero: '',
    }, formValidations);

    useEffect(()=>{
        if( mailState.status === SendMailStatus.MailSended || mailState.status === SendMailStatus.MainFailed){
            handleShowAlert();
        }
    })
    const onSubmit = async ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        setFormSubmitted(true);

        if(!isFormValid || selectedItem === '' || confirmCorreo !== correo) return;

        const departamento:string = selectedItem;
        await dispatch( startSendingMail({nombres, apellidos, correo, departamento , numero}) );
        
    }
    

    return (
    <Box
        bgcolor={'rgba(38,38,38,0.2)'}
        sx={{
            backgroundAttachment: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '80px 0 0 0',
            alignContent: 'center',
            width: '100%', 
            borderColor:'red'
        }}
    >
        <Grid height='inherit' container display='flex' direction='row' >
            <Box width='100%' height={first_content} padding='0 0 0 0' >
                <Box flexDirection={(width < 1070) ? 'column' : 'row'} margin='80px 0 0 9vw' display='flex'>
                    <Typography fontWeight='500' fontSize={(width < 860) ? {
                        xs: '8vw',
                        sm: '8vw',
                    } : {sm: '50px',
                        md: '50px',
                        lg: '50px',
                        xl: '70px'}} color='white' fontFamily='Montserrat'  >CONTÁCTANOS Y</Typography>
                    <Typography padding={(width < 1070)  ? 'none' : '0 0 0 10px'} fontWeight='bold' fontSize={(width < 860) ? {
                        xs: '8vw',
                        sm: '8vw',
                    } : {sm: '50px',
                        md: '50px',
                        lg: '50px',
                        xl: '70px'}} fontFamily='Montserrat' color='#E96417'  >EMPEZEMOS CON</Typography>
                </Box>
                <Typography fontWeight='bold' margin='0 0 0 9vw' fontSize={(width < 860) ? {
                    xs: '8vw',
                    sm: '8vw',
                } : {sm: '50px',
                    md: '50px',
                    lg: '50px',
                    xl: '70px'}}  fontFamily='Montserrat' color='#E96417'>ESTA MARAVILLOSA EXPERIENCIA</Typography>

                <Typography margin='30px 25vw 50px 9vw' color='white' fontSize={{
                    xs: '15px',
                    sm: '20px',
                    md: '20px',
                    lg: '24px',
                    xl: '24px'
                }}> ¿Estas listo para emprender el viaje al club más completo de todo latinoamerica? hecha especialmente para satisfacer tus necesidades y superar todas tus espectativas </Typography>

                <Box margin={(width < 550)  ? '0 0 0 1%' :'0 0 0 9vw'} width={(width < 550)  ? '97%' : '75%'} position='absolute' display='flex' height={
                    (width < (height + 480)) 
                        ? first_content * (50/100) 
                        : first_content * (58/100)}>
                    <Box zIndex={1} bottom={0} left={(width < 550) ?  '-31px' : '-60px'} height='auto' width={{
                        xs: '44vw',
                        sm: '46vw',
                        md: '42vw',
                        lg: '41vw',
                        xl: '33vw'
                    }} position='absolute' component={'img'} src={girlBeach} sx={{ objectFit: 'contain'}} />
                    <Box position='relative' bgcolor='rgba(233,100,23, 0.7)' width={(width < 480) ? '20%' : '35%'} />
                    <Box color='rgba(38,38,38,0.8)' position='relative' bgcolor='rgba(248,248,248, 0.7)' width={(width < 480) ? '80%' : '65%'} >
                        <form onSubmit={onSubmit}  className='animate__animated animate__fadeIn animate__faster'>
                        <Box width='100%' height='100%' >
                            <Typography fontWeight='bold'  padding='10px 10px' zIndex={1}  fontSize='20px'>
                                <InfoOutlined sx={{color:'rgba(38,38,38,0.8)', zIndex:1, fontSize: '20px'}} /> Información de contacto
                            </Typography>
                            <Box display='flex' margin= {(width < 760) ? '0 0 2vw 0' : '0 0 2vw 0'} flexDirection={(width < 760) ? 'column' : 'row'} >
                                <CustomTextField sx={{ margin: '0 10px 0 13px', width: (width < 760) ? '90%' : '47%'}} 
                                    placeholder="" 
                                    label="Nombres *"
                                    name="nombres"
                                    value={nombres}
                                    onChange={onInputChange}
                                    error = {!!nombresValid && formSubmitted}
                                    helperText={(formSubmitted) ? nombresValid : null}
                                />
                                <CustomTextField sx={{ margin:(width < 760) ? '10px 10px 0 13px' : '', width: (width < 760) ? '90%' : '46%'}} 
                                    placeholder="" 
                                    label="Apellido *"
                                    name="apellidos"
                                    value={apellidos}
                                    onChange={onInputChange}
                                    error = {!!apellidosValid && formSubmitted}
                                    helperText={(formSubmitted) ? apellidosValid : null}
                                />
                            </Box>
                            <Box display='flex' margin= {(width < 760) ? '10px 0 2vw 0' : '0 0 2vw 0'}  flexDirection={(width < 760) ? 'column' : 'row'} >
                                <CustomTextField sx={{ margin: '0 10px 0 13px', width: (width < 760) ? '90%' : '47%'}} 
                                    placeholder="" 
                                    label="E-mail *" 
                                    name="correo"
                                    value={correo}
                                    onChange={onInputChange}
                                    error = {!!correoValid && formSubmitted}
                                    helperText={(formSubmitted) ? correoValid : null}
                                />
                                <CustomTextField sx={{ margin:(width < 760) ? '11px 10px 0 13px' : '', width: (width < 760) ? '90%' : '46%'}} 
                                    placeholder="" 
                                    label="Confirmar E-mail *"  
                                    name="confirmCorreo"
                                    onChange={onInputChange}
                                    error = {(correo !== confirmCorreo ) && formSubmitted}
                                    helperText={(formSubmitted) 
                                        ? (correo !== confirmCorreo ) ? 'Los correos no coinciden' : null 
                                        : null
                                    }
                                />
                            </Box>
                            <Grid container sx={{ margin: (width < 760) ? '0 10px 0 13px' : '0 10px 2vw 20px', width: (width < 760) ? '90%' : '48%'}}>
                                <FormControl fullWidth>
                                    <InputLabel id="subcategory-select"> <Typography color={'rgba(38,38,38,0.8)'} >Departamento *</Typography></InputLabel>
                                    <Select
                                        value={selectedItem}
                                        onChange={handleCategoryChange}
                                        labelId="category-select"
                                        label="Departamento"
                                        placeholder='Comida'
                                        sx={{'& .MuiOutlinedInput-notchedOutline': {
                                            border:0,
                                            borderColor: 'rgba(248,248,248,0.5)',
                                        }}}
                                    >
                                    {departamentosPeru.map((departamento, index) => (
                                    <MenuItem key={index} value={departamento}>
                                        {departamento}
                                    </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                                {(formSubmitted && selectedItem === '') ? <Typography p='0 0 0 10px' color='red' fontSize='11px' >Seleccione un departamento</Typography> : null}
                                <Underline />
                            </Grid>
                            <CustomTextField sx={{ margin: (width < 760) ? '11px 10px 0 13px' : '0 10px 2vw 15px', width: (width < 760) ? '90%' : '48%'}} 
                                placeholder="" 
                                label="Número *" 
                                value={numero}
                                name="numero"
                                onChange={onInputChange}
                                error = {!!numeroValid && formSubmitted}
                                helperText={(formSubmitted) ? numeroValid : null}
                            />
                            <Button sx={{ display:'flex', justifyContent:'end', zIndex:1,  margin: (width < 760) ? {
                                        xs: '25px 0 0 20px',
                                        sm: '25px 0 0 12vw',
                                    } : {
                                    xs: '44vw 0 0 0',
                                    sm: '25px 0 0 6vw',
                                    md: '25px 0 0 9vw',
                                    lg: '25px 0 0 12vw',
                                    xl: '25px 0 0 15vw'
                                }, border:3, padding:'10px 40px', color:'black',  borderColor: 'rgba(233,100,23, 0.6)'}} 
                                disabled={(mailState.status === SendMailStatus.Checking) ? true : false}
                                variant="text" 
                                color="inherit"
                                type='submit'
                            >
                                <Typography color='rgba(233,100,2, 0.6)' fontWeight='bold' fontFamily={'Montserrat'}>Enviar</Typography>
                                { (mailState.status === SendMailStatus.Checking) ? <CircularProgress size={14} sx={{ margin:'0 0 0 3px', color: 'green'}} /> : null}
                            </Button>
                            {alert && (
                                <Alert
                                    title= {(mailState.severity === 'error') 
                                        ? 'Algo salió mal' 
                                        : 'Enviado con éxito'
                                    }
                                    message= {mailState.message ?? ''}
                                    severity= {(mailState.severity === 'error') ? 'error' : 'success'}
                                    duration={3000}
                                    onClose={handleCloseAlert}
                                />
                            )}
                        </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Grid>
        <InfoFooter sizeContent={second_content} />
    </Box>
    );
}