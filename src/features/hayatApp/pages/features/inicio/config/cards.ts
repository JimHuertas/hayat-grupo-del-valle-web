import familiaPlaya from '../../../../../../assets/familia-playa.jpeg';
import yogaPlaya from '../../../../../../assets/yoga-ocean.jpeg';

export interface CardType{
    image: string;
    title: string;
    content: string;
}

export const cards: CardType[] = [
    {
        image: familiaPlaya,
        title: 'Experiencias Enriquesedoras',
        content: 'Animamos a los húespedes a disfrutar más de Hayat a trávez de experiencias de inmersión inmejorables. Diversos talleres que inpulsan la sostenibilidad, la cultura, el arte...', 
    },
    {
        image: yogaPlaya,
        title:' Experiencias Enriquesedoras',
        content: 'Hayat adopta un enfoque holístico para el bienestar de nuestros huespedes las actividades y los tratamientos de bienestar se han diseñado...',
    },
    {
        image: familiaPlaya,
        title:' Experiencias Enriquesedoras',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    },
    {
        image: yogaPlaya,
        title:' Experiencias Enriquesedoras',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    },
]