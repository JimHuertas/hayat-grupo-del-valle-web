
import zonaDescanso from '../../../../../assets/zona-descanso.jpg';
import zonaEventos from '../../../../../assets/zona-eventosjpg.jpeg';
import zonaHotel from '../../../../../assets/zona-hotel.jpg';
import zonaParqueAcuatico from '../../../../../assets/zona-parque-acuatico.jpeg';
import zonaGymSpa from '../../../../../assets/gym-spa.jpg';
import zonaVistaHayat from '../../../../../assets/zona-vista-hayat.jpg';

export interface ExperienciasCardType{
    rate: string;
    image: string;
    title: string;
}


export const expCards: ExperienciasCardType[] = [
    {
        title: 'Zona de juegos acuaticos',
        image: zonaParqueAcuatico,
        rate: '4.5'
    },
    {
        title: 'Vista general Hayat',
        image: zonaVistaHayat,
        rate: '4.5'
    },
    {
        title: 'Restaurant y zona de descanso frente al mar',
        image: zonaDescanso,
        rate: '4.7'
    },
    {
        title: 'Zona de spa y gymnasio',
        image: zonaGymSpa,
        rate: '4.3'
    },
    {
        title: 'Zona de hotel',
        image: zonaHotel,
        rate: '5'
    },
    {
        title: 'Zona de eventos',
        image: zonaEventos,
        rate: '5'
    },
]