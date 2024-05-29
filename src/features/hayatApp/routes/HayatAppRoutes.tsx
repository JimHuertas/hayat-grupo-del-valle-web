import { Navigate, Route, Routes } from "react-router-dom";

import { NosotrosPage } from "../pages/features/nosotros/NosotrosPage";
import { ContactoPage } from "../pages/features/contacto/ContactoPage";
import { ServiciosPage } from "../pages/features/servicios/ServiciosPage";
import { ReservaPage } from "../pages/features/reserva/ReservaPage";
import { InicioPage } from "../pages/features/inicio/InicioPage";
import { useEffect } from "react";
import { useAppDispatch } from "../../../store";
import { changeIndex } from "../../../store/navbar/navBatSlice";


export const HayatAppRoutes = () => {
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Example: Set index based on the path
    const path = location.pathname;
    if (path === '/') {
      dispatch( changeIndex(0) );
    } else if (path === '/contacto'){
      dispatch( changeIndex(1) );
    } else if (path === '/nosotros'){
      dispatch( changeIndex(2) );
    } else if (path === '/servicios'){
      dispatch( changeIndex(3) );
    } else if (path === '/reserva'){
      dispatch( changeIndex(4) );
    }
  }, [location, dispatch]);

  
  return (
      
      <Routes>
          <Route path="/" element={ <InicioPage /> } />
          <Route path="/contacto" element={ <ContactoPage /> }  />
          <Route path="/nosotros" element={ <NosotrosPage /> } />
          <Route path="/servicios" element={ <ServiciosPage /> } />
          <Route path="/reserva" element={ <ReservaPage /> } />
          <Route path='/*' element={ <Navigate to="/" /> } />
      </Routes>
    )
  }