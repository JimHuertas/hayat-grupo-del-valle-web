import { Grid } from '@mui/material';
import { HayatAppLayout } from '../../../layout/HayatAppLayout';
import { Contacto1 } from './features/1-Contacto';

export const ContactoPage = () => {
    // const { theme } = useSelector( (state: RootState) => state.theme );

  return (
    <HayatAppLayout>
    <Grid container 
        direction='row' 
        // justifyContent='space-between' 
        // alignItems='center' 
        className='animate__animated animate__fadeIn animate__faster'
    >
        <Contacto1 />
    </Grid>
    </HayatAppLayout>
  )
}
