import { Grid } from '@mui/material';
import { HayatAppLayout } from '../../../layout/HayatAppLayout';

import { InitPage1 } from './features/1-InitPage';
import { CardsContacto2 } from './features/2-CardsContacto';
import { RecorridoVirtual3 } from './features/3-RecorridoVirtual';

export const HomePage = () => {
    // const { theme } = useSelector( (state: RootState) => state.theme );

  return (
    <HayatAppLayout>
    <Grid container 
        direction='column' 
        justifyContent='top' 
        alignItems='center' 
        className='animate__animated animate__fadeIn animate__faster'
    >
        <InitPage1 />
        <CardsContacto2/>
        <RecorridoVirtual3/>
    </Grid>
    </HayatAppLayout>
  )
}
