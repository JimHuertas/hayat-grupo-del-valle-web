import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/features/inicio/HomePage";
import { NosotrosPage } from "../pages/features/nosotros/NosotrosPage";
import { ContactoPage } from "../pages/features/contacto/ContactoPage";
import { ServiciosPage } from "../pages/features/servicios/1-ServiciosPage";


export const HayatAppRoutes = () => {
    return (
      <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/contacto" element={ <ContactoPage /> } />
          <Route path="/nosotros" element={ <NosotrosPage /> } />
          <Route path="/servicios" element={ <ServiciosPage /> } />
          <Route path='/*' element={ <Navigate to="/" /> } />
      </Routes>
    )
  }