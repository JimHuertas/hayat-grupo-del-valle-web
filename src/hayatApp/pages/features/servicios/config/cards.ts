
import imagePlaya from '../../../../../assets/yoga-ocean.jpeg';
import comidaPlaya from '../../../../../assets/comida-playa.jpg';
import barPlaya from '../../../../../assets/bar-playa.jpg';

export interface ExperienciasCardType{
    id: string;
    image: string;
    title: string;
    content: string;
    height: string;
}


export const cards: ExperienciasCardType[] = [
    {
        id: '01',
        title: 'Actividad',
        content: 'Una experiencia culinaria frente al mar con fusión de sabores frescos y exóticos.',
        image: comidaPlaya,
        height: '170px'
    },
    {
        id: '02',
        title: 'Actividad',
        content: 'El bar de playa del club ofrece cócteles refrescantes y aperitivos junto al mar con servicio excepcional.',
        image: barPlaya,
        height: '170px'
    },
    {
        id: '03',
        title: 'Actividad',
        content: 'Descripción resumida de todo lo que esta actividad te puede ofrecer 3',
        image: imagePlaya,
        height: '170px'
    },
    {
        id: '04',
        title: 'Actividad',
        content: 'Descripción resumida de todo lo que esta actividad te puede ofrecer 4',
        image: imagePlaya,
        height: '170px'
    },
]