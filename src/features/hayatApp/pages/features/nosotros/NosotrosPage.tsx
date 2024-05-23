import { Grid } from '@mui/material';
import { HayatAppLayout } from '../../../layout/HayatAppLayout';
import { Nosotros1 } from './features/1-Nosotros';

export const NosotrosPage = () => {
    // const { theme } = useSelector( (state: RootState) => state.theme );

  return (
    <HayatAppLayout>
    <Grid container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{ mb: 1 }}
        className='animate__animated animate__fadeIn animate__faster'
    >
        <Nosotros1 />
    </Grid>
    </HayatAppLayout>
  )
}
