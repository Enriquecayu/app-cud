import { competitiveLevels } from './competitiveData';

// src/data/categoriesData.js
import patoImg from '../assets/pato.png';
import gatoImg from "../assets/gato.png";
import perroImg from "../assets/perro.png";
import leonImg from "../assets/leon.png";
import jirafaImg from "../assets/jirafa.png";
import gorilaImg from "../assets/gorila.png";
import vacaImg from "../assets/vaca.png";
import elefanteImg from "../assets/elefante.png";
import canguroImg from "../assets/canguro.png";
import cebraImg from "../assets/cebra.png";
//IMPORTACIONES DE OBJETOS
import sillaImg from "../assets/silla.png";
import cucharaImg from "../assets/cuchara.png";
import lapizImg from "../assets/lápiz.png";
import camaImg from "../assets/cama.png";
import llaveImg from "../assets/llave.png";
import relojImg from "../assets/reloj.png";
import peineImg from "../assets/peine.png";
import vasoImg from "../assets/vaso.png";
import tijeraImg from "../assets/tijera.png";
import candadoImg from "../assets/candado.png";

//IMPORTACIONES DE ALIMENTOS
import manzanaImg from "../assets/manzana.png";
import bananaImg from "../assets/banana.png";
import lecheImg from "../assets/leche.png";
import panImg from "../assets/pan.png";
import naranjaImg from "../assets/naranja.png";
import quesoImg from "../assets/queso.png";
import heladoImg from "../assets/helado.png";
import pizzaImg from "../assets/pizza.png";
import aguaImg from "../assets/agua.png";
import chocolateImg from "../assets/chocolate.png";

export const categories = [
    {
        id: 'animales',
        title: 'Animales',
        icon: '🐶',
        levels: [
            { id: 1, hint: 'Animal que ladra', target: 'PERRO', image: perroImg },
            { id: 2, hint: 'Animal que dice miau', target: 'GATO', image: gatoImg },
            { id: 3, hint: 'Animal que nada y hace cuac', target: 'PATO', image: patoImg },
            { id: 4, hint: 'Rey de la selva', target: 'LEON', image: leonImg },
            { id: 5, hint: 'Animal de cuello largo', target: 'JIRAFA', image: jirafaImg },
            { id: 6, hint: 'Mono grande y peludo', target: 'GORILA', image: gorilaImg },
            { id: 7, hint: 'Da leche y hace mu', target: 'VACA', image: vacaImg },
            { id: 8, hint: 'Tiene trompa larga', target: 'ELEFANTE', image: elefanteImg },
            { id: 9, hint: 'Salto alto y lleva bolsa', target: 'CANGURO', image: canguroImg },
            { id: 10, hint: 'Rayas blancas y negras', target: 'CEBRA', image: cebraImg }
        ]
    },
    {
        id: 'objetos',
        title: 'Objetos',
        icon: '🏠',
        levels: [
            { id: 1, hint: 'Sirve para sentarse', target: 'SILLA', image: sillaImg },
            { id: 2, hint: 'Sirve para comer sopa', target: 'CUCHARA', image: cucharaImg },
            { id: 3, hint: 'Para escribir sobre papel', target: 'LAPIZ', image: lapizImg },
            { id: 4, hint: 'Mueble para dormir', target: 'CAMA', image: camaImg },
            { id: 5, hint: 'Para abrir las puertas', target: 'LLAVE', image: llaveImg },
            { id: 6, hint: 'Sirve para ver la hora', target: 'RELOJ', image: relojImg },
            { id: 7, hint: 'Para peinar el cabello', target: 'PEINE', image: peineImg },
            { id: 8, hint: 'Para tomar agua o jugo', target: 'VASO', image: vasoImg },
            { id: 9, hint: 'Para cortar con cuidado', target: 'TIJERA', image: tijeraImg },
            { id: 10, hint: 'Para poner seguridad a las puertas', target: 'CANDADO', image: candadoImg }
        ]
    },
    {
        id: 'alimentos',
        title: 'Alimentos y Frutas',
        icon: '🍎',
        levels: [
            { id: 1, hint: 'Fruta roja que come la bruja de Blancanieves', target: 'MANZANA', image: manzanaImg },
            { id: 2, hint: 'Fruta amarilla que le gusta a los monos', target: 'BANANA', image: bananaImg },
            { id: 3, hint: 'Alimento blanco que da la vaca', target: 'LECHE', image: lecheImg },
            { id: 4, hint: 'Se hace con harina y se come horneado', target: 'PAN', image: panImg },
            { id: 5, hint: 'Fruta redonda y cítrica de color naranja', target: 'NARANJA', image: naranjaImg },
            { id: 6, hint: 'Alimento amarillo que se derrite en la tostada', target: 'QUESO', image: quesoImg },
            { id: 7, hint: 'Dulce frío que se come en verano', target: 'HELADO', image: heladoImg },
            { id: 8, hint: 'Alimento redondo con salsa y queso arriba', target: 'PIZZA', image: pizzaImg },
            { id: 9, hint: 'Bebida transparente y esencial para vivir', target: 'AGUA', image: aguaImg },
            { id: 10, hint: 'Postre dulce hecho de cacao', target: 'CHOCOLATE', image: chocolateImg }
        ]
    },
    {
        id: 'competitivo',
        title: 'Competitivo',
        icon: '⚡',
        isCompetitive: true, // Esto le avisa a tu App.jsx que debe usar competitiveLevels
        levels: competitiveLevels // ¡Inyectamos directamente tu archivo dedicado!
    }
];