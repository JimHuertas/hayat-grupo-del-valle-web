import { Grid } from '@mui/material';
import { HayatAppLayout } from '../../../layout/HayatAppLayout';
import { Servicios1 } from './features/1-Servicios';
import { Experiencias2 } from './features/2-Experiencias';

export const ServiciosPage = () => {
    // const { theme } = useSelector( (state: RootState) => state.theme );

  return (
    <HayatAppLayout>
    <Grid container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        className='animate__animated animate__fadeIn animate__faster'
    >
        <Servicios1/>
        <Experiencias2/>
    </Grid>
    </HayatAppLayout>
  )
}
