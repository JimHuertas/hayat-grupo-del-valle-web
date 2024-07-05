
export interface ExperienciasCardType{
    id: string;
    image: string;
    title: string;
    content: string;
    height: string;
    position:string;
}


export const cards: ExperienciasCardType[] = [
    {//comida
        id: '01',
        title: 'Gastronomía',
        content: 'Una experiencia culinaria frente al mar con fusión de sabores nacionales e internacionales.',
        image: 'https://cdn.clubhayat.com/gastronomia.webp',
        height: '170px',
        position: 'center'
    },
    {//bar
        id: '02',
        title: 'Discoteca',
        content: 'El bar de playa del club ofrece cócteles refrescantes y aperitivos junto al mar con servicio excepcional.',
        image: 'https://cdn.clubhayat.com/bar.webp',
        height: '170px',
        position: 'center'
    },
    {//Show de especiales
        id: '03',
        image: 'https://cdn.clubhayat.com/show-especiales-card.webp',
        title:'Eventos y conciertos',
        content: 'Vive eventos únicos y emocionantes en nuestro club, con espectáculos variados.',
        height: '170px',
        position: 'center'
    },
    {//Parque acuatico
        id: '04',
        image: 'https://cdn.clubhayat.com/parque-acuatico.webp',
        title:'Water Park',
        content: 'Disfruta de nuestro emocionante parque acuático con toboganes, piscinas y juegos interactivos.',
        height: '170px',
        position: 'center'
    },
    {//Hotel
        id: '05',
        image: 'https://cdn.clubhayat.com/hoteles.webp',
        title:'Zona Hotelera',
        content: 'Disfruta de una estadía lujosa en nuestro hotel con más de 800 habitaciones y suits.',
        height: '170px',
        position: 'left'
    },
    {//Spa y gym
        id: '06',
        image: 'https://cdn.clubhayat.com/zona-spa.webp',
        title:' Gym y Spa',
        content: 'Relájate en nuestro spa, y mantén tu rutina de ejercicio en un gimnasio moderno.',
        height: '170px',
        position: 'center'
    },
    {//Sala de reunion
        id: '06',
        image: 'https://cdn.clubhayat.com/oficina.webp',
        title:'Salas de Reunión',
        content: 'Espacio elegante para eventos corporativos y reuniones privadas.',
        height: '170px',
        position: 'center'
    },
    {//Relajacion
        id: '07',
        image: 'https://cdn.clubhayat.com/yoga.webp',
        title:'Relajación',
        content: 'Conecta todos tus sentidos con la naturaleza y maravíllate con la espectacular vista al mar.',
        height: '170px',
        position: 'left'
    },
    {//Sport Water
        id: '08',
        image: 'https://cdn.clubhayat.com/caminata-marina.webp',
        title:'Sport Water',
        content: 'Diviértete con actividades en el mar y en una plataforma flotante de mas de 2,000 m2.',
        //Sumergéte desde nuestro muelle flotante con una plataforma de más de 2,000 m2.
        height: '170px',
        position: 'center'
    },
    {//Extreme Hayat
        id: '09',
        image: 'https://cdn.clubhayat.com/extreme-hayat.webp',
        title:'Extreme Hayat',
        content: 'Vive juegos extremos, divertidos y emocionantes para niños.',
        height: '170px',
        position: 'center'
    },
]