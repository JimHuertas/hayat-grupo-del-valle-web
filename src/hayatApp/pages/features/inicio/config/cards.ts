import comidaPlaya from '../../../../../assets/comida-playa.jpg';
import barPlaya from '../../../../../assets/bar.jpg';
import showEspeciales from '../../../../../assets/show-especiales-card.jpg';
import parqueAcuatico from '../../../../../assets/parque-acuatico.jpg';
import hotel from '../../../../../assets/hotel.jpg';
import gymSpa from '../../../../../assets/gym-spa.jpg';
import salaReunion from '../../../../../assets/sala-de-reunion.jpg';



export interface CardType{
    image: string;
    title: string;
    content: string;
}

export const cards: CardType[] = [
    {//Comida
        image: comidaPlaya,
        title: 'Comidas',
        content: 'Una experiencia culinaria frente al mar con fusión de sabores frescos y exóticos, decoración serena y brisa refrescante, garantizando servicio excepcional y vistas', 
    },
    {//Bar
        image: barPlaya,
        title:'Bares',
        content: 'El bar de playa del club ofrece cócteles refrescantes y aperitivos junto al mar en un ambiente relajado con servicio excepcional',
    },
    {//Show de especiales
        image: showEspeciales,
        title:'Show de especiales',
        content: 'Vive eventos únicos y emocionantes en nuestro club, con espectáculos variados que incluyen música en vivo, shows temáticos y entretenimiento exclusivo para nuestros miembros.',
    },
    {//Parque acuatico
        image: parqueAcuatico,
        title:'Parque Acuatico',
        content: 'Disfruta de nuestro emocionante parque acuático con toboganes, piscinas y juegos interactivos, ideal para la diversión de toda la familia frente al mar.',
    },
    {//Hotel
        image: hotel,
        title:'Hotel',
        content: 'Disfruta de una estadía lujosa en nuestro hotel, con habitaciones elegantes, servicio excepcional y vistas panorámicas al mar, garantizando una experiencia única.',
    },
    {//Spa y gym
        image: gymSpa,
        title:'Spa y Gym',
        content: 'Relájate en nuestro spa con tratamientos holísticos y masajes rejuvenecedores, y mantén tu rutina de ejercicio en un gimnasio moderno con vistas al mar.',
    },
    {//Sala de reunion
        image: salaReunion,
        title:'Salas de reuniones',
        content: 'Espacio elegante para eventos corporativos y reuniones privadas con vistas al océano y asegurando encuentros productivos y memorables.',
    },
]