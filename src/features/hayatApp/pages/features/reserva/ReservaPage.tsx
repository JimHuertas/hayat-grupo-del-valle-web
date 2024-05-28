import { Grid } from '@mui/material';
import { HayatAppLayout } from '../../../layout/HayatAppLayout';
import { Reserva1 } from './features/1-Reserva';

export const ReservaPage = () => {
    // const { theme } = useSelector( (state: RootState) => state.theme );

  return (
    <HayatAppLayout>
    <Grid container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        className='animate__animated animate__fadeIn animate__faster'
    >
        <Reserva1 />
    </Grid>
    </HayatAppLayout>
  )
}
