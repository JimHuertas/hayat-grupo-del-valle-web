import { Box } from '@mui/material';
import { HayatAppLayout } from '../../../layout/HayatAppLayout';
import { Contacto1 } from './features/1-Contacto';

export const ContactoPage = () => {
    // const { theme } = useSelector( (state: RootState) => state.theme );

  return (
    <HayatAppLayout>
    <Box
        display='flex' 
        flexDirection='column'
        className='animate__animated animate__fadeIn animate__faster'
    >
        <Contacto1 />
    </Box>
    </HayatAppLayout>
  )
}
