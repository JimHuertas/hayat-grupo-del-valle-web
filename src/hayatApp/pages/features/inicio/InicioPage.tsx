import { Box } from '@mui/material';

import { InitPage1 } from './features/1-InitPage';
import { CardsContacto2 } from './features/2-CardsContacto';
import { RecorridoVirtual3 } from './features/3-RecorridoVirtual';
import { HayatAppLayout } from '../../../layout/HayatAppLayout';
import { loadingScreenHook } from '../../../hooks/loadingWait';
import { LoadingScreen } from '../../../ui/components/LoadingScreen';
import { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../../../store';
import { useSelector } from 'react-redux';
import { changeIndex } from '../../../../store/navbar/navBatSlice';

export const InicioPage = () => {
  const { isLoading } = loadingScreenHook();
  const dispatch = useAppDispatch();
  const indexNav= useSelector((state: RootState) => state.nabBar.index);

  useEffect(()=>{
    if(indexNav !== 0)
      dispatch( changeIndex(0) )
  },[])
  
  return (isLoading) 
      ? <LoadingScreen/> 
      : <HayatAppLayout type='video' >
        <Box 
            flexDirection='column'
            justifyContent='top' 
            alignItems='center' 
            className='animate__animated animate__fadeIn animate__faster'
        >
            <InitPage1 />
            <CardsContacto2/>
            <RecorridoVirtual3/>
        </Box>
        </HayatAppLayout>

}
