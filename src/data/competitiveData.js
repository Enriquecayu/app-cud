// src/data/competitiveData.js
import patoImg from '../assets/pato.png';
import gatoImg from '../assets/gato.png';
import perroImg from '../assets/perro.png';
import leonImg from '../assets/leon.png';
import jirafaImg from '../assets/jirafa.png';
import gorilaImg from '../assets/gorila.png';
import vacaImg from '../assets/vaca.png';
import elefanteImg from '../assets/elefante.png';
import canguroImg from '../assets/canguro.png';
import cebraImg from '../assets/cebra.png';

import manzanaImg from '../assets/manzana.png';
import bananaImg from '../assets/banana.png';
import naranjaImg from '../assets/naranja.png';
import frutillaImg from '../assets/frutilla.png';
import uvaImg from '../assets/uva.png';
import ananaImg from '../assets/anana.png';
import duraznoImg from '../assets/durazno.png';
import peraImg from '../assets/pera.png';
import ciruelaImg from '../assets/ciruela.png';
import sandiaImg from '../assets/sandia.png';
export const competitiveLevels = [
    {
        id: 1,
        title: 'Frutas',
        icon: '🍎',
        image: manzanaImg,
        description: '10 rondas de frutas a máxima velocidad',
        rounds: [
            { id: 1, hint: 'Fruta roja', target: 'MANZANA', image: manzanaImg },
            { id: 2, hint: 'Fruta amarilla', target: 'BANANA', image: bananaImg },
            { id: 3, hint: 'Cítrico naranja', target: 'NARANJA', image: naranjaImg },
            { id: 4, hint: 'Fruta pequeña y roja', target: 'FRUTILLA', image: frutillaImg },
            { id: 5, hint: 'Fruta redonda verde o violeta', target: 'UVA', image: uvaImg },
            { id: 6, hint: 'Fruta tropical con corona', target: 'ANANA', image: ananaImg },
            { id: 7, hint: 'Fruta dulce de pepa grande', target: 'DURAZNO', image: duraznoImg },
            { id: 8, hint: 'Fruta verde por fuera y dulce', target: 'PERA', image: peraImg },
            { id: 9, hint: 'Fruta carnosa con carozo grande', target: 'CIRUELA', image: ciruelaImg },
            { id: 10, hint: 'Fruta de verano jugosa', target: 'SANDIA', image: sandiaImg }
        ]
    },
    {
        id: 2,
        title: 'Animales',
        icon: '🐶',
        image: perroImg,
        description: '10 rondas de animales con teclado desordenado',
        rounds: [
            { id: 1, hint: 'Ladra', target: 'PERRO', image: perroImg },
            { id: 2, hint: 'Maúlla', target: 'GATO', image: gatoImg },
            { id: 3, hint: 'Hace cuac', target: 'PATO', image: patoImg },
            { id: 4, hint: 'Rey de la selva', target: 'LEON', image: leonImg },
            { id: 5, hint: 'Cuello largo', target: 'JIRAFA', image: jirafaImg },
            { id: 6, hint: 'Da leche', target: 'VACA', image: vacaImg },
            { id: 7, hint: 'Trompa larga', target: 'ELEFANTE', image: elefanteImg },
            { id: 8, hint: 'Rayas negras y blancas', target: 'CEBRA', image: cebraImg },
            { id: 9, hint: 'Mono grande', target: 'GORILA', image: gorilaImg },
            { id: 10, hint: 'Salto alto con bolsa', target: 'CANGURO', image: canguroImg }
        ]
    },
];