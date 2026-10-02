// src/data/categoriesData.js
import patoImg from '../assets/pato.png';
import casaImg from "../assets/casa.png";
import monoImg from "../assets/mono.png";
import perroImg from "../assets/perro.png";
import gatoImg from "../assets/gato.png";

export const categories = [
    {
        id: 'animales',
        title: 'Animales',
        icon: '🐶',
        levels: [
            { id: 1, hint: 'Animal que ladra', target: 'PERRO', image: perroImg },
            { id: 2, hint: 'Animal que dice miau', target: 'GATO', image: gatoImg },
            { id: 3, hint: 'Animal que nada y hace cuac', target: 'PATO', image: patoImg }
        ]
    },
    {
        id: 'objetos',
        title: 'Objetos',
        icon: '🏠',
        levels: [
            { id: 1, hint: 'Sirve para sentarse', target: 'SILLA', image: '/images/silla.jpg' },
            { id: 2, hint: 'Sirve para comer', target: 'CUCHARA', image: '/images/cuchara.jpg' },
        ]
    },
    {
        id: 'familiares',
        title: 'Familiares',
        icon: '❤️',
        levels: [
            { id: 1, hint: 'La que te dio la vida', target: 'MAMA', image: '/images/mama.jpg' },
        ]
    }
];