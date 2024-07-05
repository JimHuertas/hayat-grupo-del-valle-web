

export interface CardType{
    image: string;
    title: string;
    content: string;
    position:string;
    smallPosition: string;
}

export const cards: CardType[] = [
    {//Comida
        image: 'https://cdn.clubhayat.com/gastronomia.webp',
        title: 'Gastronomía',
        content: 'Una experiencia culinaria frente al mar con fusión de sabores nacionales e internacionales.', 
        position: 'center',
        smallPosition: 'center'
    },
    {//Bar
        image: 'https://cdn.clubhayat.com/bar.webp',
        title:'Discoteca',
        content: 'El bar de playa del club ofrece cócteles refrescantes y aperitivos junto al mar en un ambiente relajado con servicio excepcional.',
        position: 'center',
        smallPosition: 'center'
    },
    {//Show de especiales
        image: 'https://cdn.clubhayat.com/show-especiales-card.webp',
        title:'Eventos y conciertos',
        content: 'Vive eventos únicos y emocionantes en nuestro club, con espectáculos variados que incluyen música en vivo, shows temáticos y entretenimiento exclusivo para nuestros miembros.',
        position: 'center',
        smallPosition: '65%'
    },
    {//Parque acuatico
        image: 'https://cdn.clubhayat.com/parque-acuatico.webp',
        title:'Water Park',
        content: 'Disfruta de nuestro emocionante parque acuático con toboganes, piscinas y juegos interactivos, ideal para la diversión de toda la familia frente al mar.',
        position: 'center',
        smallPosition: 'center'
    },
    {//Hotel
        image: 'https://cdn.clubhayat.com/hoteles.webp',
        title:'Zona Hotelera',
        content: 'Disfruta de una estadía lujosa en nuestro hotel con más de 800 habitaciones con vistas panorámicas al mar, garantizando una experiencia única.',
        position: 'left',
        smallPosition: '40%'
    },
    {//Spa y gym
        image: 'https://cdn.clubhayat.com/zona-spa.webp',
        title:'Spa y Gym',
        content: 'Relájate en nuestro spa con tratamientos holísticos y masajes rejuvenecedores, y mantén tu rutina de ejercicio en un gimnasio moderno con vistas al mar.',
        position: 'center',
        smallPosition: '60%'
    },
    {//Sala de reunion
        image: 'https://cdn.clubhayat.com/oficina.webp',
        title:'Centro de convenciones',
        content: 'Espacio elegante para eventos corporativos y reuniones privadas con vistas al océano.',
        position: 'center',
        smallPosition: '30%'
    },
    {//Relajacion
        image: 'https://cdn.clubhayat.com/yoga.webp',
        title:'Relajación',
        content: 'Conecta todos tus sentidos con la naturaleza y maravíllate con la espectacular vista al mar.',
        position: '25%',
        smallPosition: '25%'
    },
    {//Sport Water
        image: 'https://cdn.clubhayat.com/caminata-marina.webp',
        title:'Sport Water',
        content: 'Diviértete con actividades en el mar y en una plataforma flotante de mas de 2,000 m2.',
        position: 'left',
        smallPosition: '35%'
    },
    {//Extreme Hayat
        image: 'https://cdn.clubhayat.com/extreme-hayat.webp',
        title:'Extreme Hayat',
        content: 'Vive juegos extremos, divertidos y emocionantes para niños.',
        position: 'center',
        smallPosition: '45%'
    },
]