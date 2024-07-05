
export interface ExperienciasCardType{
    rate: string;
    image: string;
    title: string;
    position: string;
}


export let expCards: ExperienciasCardType[] = [
    {
        title: 'Zona de juegos acuaticos',
        image: 'https://cdn.clubhayat.com/zona-parque-acuatico.webp',
        rate: '4.5',
        position: 'center'
    },
    {
        title: 'Vista general Hayat',
        image: 'https://cdn.clubhayat.com/zona-general-hayat.webp',
        rate: '4.5',
        position: 'center'
    },
    {
        title: 'Restaurant y zona de descanso frente al mar',
        image: 'https://cdn.clubhayat.com/zona-descanso.webp',
        rate: '4.7',
        position: 'center'
    },
    {
        title: 'Zona de spa y gymnasio',
        image: 'https://cdn.clubhayat.com/zona-spa.webp',
        rate: '4.3',
        position: 'left'
    },
    {
        title: 'Zona de eventos',
        image: 'https://cdn.clubhayat.com/zona-conciertos.webp',
        rate: '5',
        position: 'center'
    },
    {   
        title: 'Zona hotelera',
        image: 'https://cdn.clubhayat.com/zona-hoteles.webp',
        rate: '5',
        position: 'center'
    },
]