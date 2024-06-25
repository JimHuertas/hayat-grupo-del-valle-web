
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
        image: 'https://cdn.clubhayat.com/comida-playa.jpg',
        height: '170px'
    },
    {//bar
        id: '02',
        title: 'Bares',
        content: 'El bar de playa del club ofrece cócteles refrescantes y aperitivos junto al mar con servicio excepcional.',
        image: 'https://cdn.clubhayat.com/bar.jpg',
        height: '170px'
    },
    {//Show de especiales
        id: '03',
        image: 'https://cdn.clubhayat.com/show-especiales-card.jpg',
        title:'Show Especiales',
        content: 'Vive eventos únicos y emocionantes en nuestro club, con espectáculos variados.',
        height: '170px'
    },
    {//Parque acuatico
        id: '04',
        image: 'https://cdn.clubhayat.com/parque-acuatico.jpg',
        title:'Parque Acuático',
        content: 'Disfruta de nuestro emocionante parque acuático con toboganes, piscinas y juegos interactivos.',
        height: '170px'
    },
    {//Hotel
        id: '05',
        image: 'https://cdn.clubhayat.com/hotel.jpg',
        title:'Hotel',
        content: 'Disfruta de una estadía lujosa en nuestro hotel, con habitaciones elegantes y servicio excepcional.',
        height: '170px'
    },
    {//Spa y gym
        id: '06',
        image: 'https://cdn.clubhayat.com/gym-spa.jpg',
        title:' Gym y Spa',
        content: 'Relájate en nuestro spa, y mantén tu rutina de ejercicio en un gimnasio moderno.',
        height: '170px'
    },
    {//Sala de reunion
        id: '06',
        image: 'https://cdn.clubhayat.com/sala-de-reunion.jpg',
        title:'Salas de Reunión',
        content: 'Espacio elegante para eventos corporativos y reuniones privadas.',
        height: '170px'
    },
]