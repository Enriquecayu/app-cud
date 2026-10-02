import patoImg from '../assets/pato.png';
import casaImg from "../assets/casa.png";
import monoImg from "../assets/mono.png";
// src/data/levels.js
export const levelsData = [
    {
        id: 1,
        type: "word", // Nivel de palabra simple
        target: "PATO",
        image: patoImg, 
        hint: "Animal que nada y hace cuac"
    },
    {
        id: 2,
        type: "word",
        target: "CASA",
        image: casaImg,
        hint: "Lugar donde vivimos"
    },
    {
        id: 3,
        type: "phrase", // Nivel de frase progresiva
        target: "PATO NADA",
        image: "https://images.unsplash.com/photo-1555169062-01347abf78fb?auto=format&fit=crop&w=400&q=80",
        hint: "¿Qué hace el pato en el agua?"
    },
    {
        id: 4,
        type: "word",
        target: "MONO",
        image: monoImg,
        hint: "come banana"
    }
];