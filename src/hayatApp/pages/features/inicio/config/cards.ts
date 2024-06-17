import comidaPlaya from '../../../../../assets/comida-playa.jpg';
import barPlaya from '../../../../../assets/bar-playa.jpg';

export interface CardType{
    image: string;
    title: string;
    content: string;
}

export const cards: CardType[] = [
    {
        image: comidaPlaya,
        title: 'Experiencias Enriquesedoras',
        content: 'Una experiencia culinaria frente al mar con fusión de sabores frescos y exóticos, decoración serena y brisa refrescante, garantizando servicio excepcional y vistas', 
    },
    {
        image: barPlaya,
        title:'Experiencias Enriquesedoras',
        content: 'El bar de playa del club ofrece cócteles refrescantes y aperitivos junto al mar en un ambiente relajado con servicio excepcional',
    },
    {
        image: comidaPlaya,
        title:' Experiencias Enriquesedoras',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    },
    {
        image: barPlaya,
        title:' Experiencias Enriquesedoras',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    },
]