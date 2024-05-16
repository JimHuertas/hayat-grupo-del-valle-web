import { Button, Grid, Typography } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { HayatAppLayout } from '../../../layout/HayatAppLayout';

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
        <Grid item>
            <Typography fontSize={ 50 } fontWeight='light' >Nosotros View</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>
    </Grid>
    </HayatAppLayout>
  )
}
