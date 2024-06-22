
import comidaPlaya from '../../../../../assets/comida-playa.jpg';
import barPlaya from '../../../../../assets/bar.jpg';
import showEspeciales from '../../../../../assets/show-especiales-card.jpg';
import parqueAcuatico from '../../../../../assets/parque-acuatico.jpg';
import hotel from '../../../../../assets/hotel.jpg';
import gymSpa from '../../../../../assets/gym-spa.jpg';
import salaReunion from '../../../../../assets/sala-de-reunion.jpg';

export interface ExperienciasCardType{
    id: string;
    image: string;
    title: string;
    content: string;
    height: string;
}


export const cards: ExperienciasCardType[] = [
    {//comida
        id: '01',
        title: 'Comidas',
        content: 'Una experiencia culinaria frente al mar con fusión de sabores frescos y exóticos.',
        image: comidaPlaya,
        height: '170px'
    },
    {//bar
        id: '02',
        title: 'Bares',
        content: 'El bar de playa del club ofrece cócteles refrescantes y aperitivos junto al mar con servicio excepcional.',
        image: barPlaya,
        height: '170px'
    },
    {//Show de especiales
        id: '03',
        image: showEspeciales,
        title:'Show Especiales',
        content: 'Vive eventos únicos y emocionantes en nuestro club, con espectáculos variados.',
        height: '170px'
    },
    {//Parque acuatico
        id: '04',
        image: parqueAcuatico,
        title:'Parque Acuático',
        content: 'Disfruta de nuestro emocionante parque acuático con toboganes, piscinas y juegos interactivos.',
        height: '170px'
    },
    {//Hotel
        id: '05',
        image: hotel,
        title:'Hotel',
        content: 'Disfruta de una estadía lujosa en nuestro hotel, con habitaciones elegantes y servicio excepcional.',
        height: '170px'
    },
    {//Spa y gym
        id: '06',
        image: gymSpa,
        title:' Gym y Spa',
        content: 'Relájate en nuestro spa, y mantén tu rutina de ejercicio en un gimnasio moderno.',
        height: '170px'
    },
    {//Sala de reunion
        id: '06',
        image: salaReunion,
        title:'Salas de Reunión',
        content: 'Espacio elegante para eventos corporativos y reuniones privadas.',
        height: '170px'
    },
]