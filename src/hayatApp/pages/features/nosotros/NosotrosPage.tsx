import { Box } from '@mui/material';
import { HayatAppLayout } from '../../../layout/HayatAppLayout';
import { Nosotros1 } from './features/1-Nosotros';

export const NosotrosPage = () => {
    // const { theme } = useSelector( (state: RootState) => state.theme );

  return (
    <HayatAppLayout>
    <Box 
        flexDirection='column'
        justifyContent='top' 
        alignItems='center' 
        className='animate__animated animate__fadeIn animate__faster'
    >
        <Nosotros1 />
    </Box>
    </HayatAppLayout>
  )
}
