

export interface CardType{
    image: string;
    title: string;
    content: string;
}

export const cards: CardType[] = [
    {//Comida
        image: 'https://cdn.clubhayat.com/comida-playa.jpg',
        title: 'Comidas',
        content: 'Una experiencia culinaria frente al mar con fusión de sabores frescos y exóticos, decoración serena y brisa refrescante, garantizando servicio excepcional y vistas', 
    },
    {//Bar
        image: 'https://cdn.clubhayat.com/bar.jpg',
        title:'Bares',
        content: 'El bar de playa del club ofrece cócteles refrescantes y aperitivos junto al mar en un ambiente relajado con servicio excepcional',
    },
    {//Show de especiales
        image: 'https://cdn.clubhayat.com/show-especiales-card.jpg',
        title:'Show de especiales',
        content: 'Vive eventos únicos y emocionantes en nuestro club, con espectáculos variados que incluyen música en vivo, shows temáticos y entretenimiento exclusivo para nuestros miembros.',
    },
    {//Parque acuatico
        image: 'https://cdn.clubhayat.com/parque-acuatico.jpg',
        title:'Parque Acuatico',
        content: 'Disfruta de nuestro emocionante parque acuático con toboganes, piscinas y juegos interactivos, ideal para la diversión de toda la familia frente al mar.',
    },
    {//Hotel
        image: 'https://cdn.clubhayat.com/hotel.jpg',
        title:'Hotel',
        content: 'Disfruta de una estadía lujosa en nuestro hotel, con habitaciones elegantes, servicio excepcional y vistas panorámicas al mar, garantizando una experiencia única.',
    },
    {//Spa y gym
        image: 'https://cdn.clubhayat.com/gym-spa.jpg',
        title:'Spa y Gym',
        content: 'Relájate en nuestro spa con tratamientos holísticos y masajes rejuvenecedores, y mantén tu rutina de ejercicio en un gimnasio moderno con vistas al mar.',
    },
    {//Sala de reunion
        image: 'https://cdn.clubhayat.com/sala-de-reunion.jpg',
        title:'Salas de reuniones',
        content: 'Espacio elegante para eventos corporativos y reuniones privadas con vistas al océano y asegurando encuentros productivos y memorables.',
    },
]