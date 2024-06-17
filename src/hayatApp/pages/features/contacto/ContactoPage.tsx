import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Contacto1 } from './features/1-Contacto';
import { HayatAppLayout } from '../../../layout/HayatAppLayout';
import { RootState, useAppDispatch } from '../../../../store';
import { changeIndex } from '../../../../store/navbar/navBatSlice';
import { loadingScreenHook } from '../../../hooks/loadingWait';
import { LoadingScreen } from '../../../ui/components/LoadingScreen';

export const ContactoPage = () => {
  const { isLoading } = loadingScreenHook();
  const dispatch = useAppDispatch();
  const indexNav= useSelector((state: RootState) => state.nabBar.index);

  useEffect(()=>{
    if(indexNav !== 1)
      dispatch( changeIndex(1) )
  },[])

  return ((isLoading) 
  ? <LoadingScreen/> 
  :  <HayatAppLayout>
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
