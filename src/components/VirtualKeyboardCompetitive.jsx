import React, { useState, useEffect } from 'react';
import '../styles/VirtualKeyboard.css';

export const VirtualKeyboardCompetitive = ({ currentRoundIndex, onKeyPress, onDelete }) => {
    const [shuffledLetters, setShuffledLetters] = useState([]);

    useEffect(() => {
        const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
        // Algoritmo de Fisher-Yates para desordenar el abecedario al azar
        for (let i = alphabet.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [alphabet[i], alphabet[j]] = [alphabet[j], alphabet[i]];
        }
        setShuffledLetters(alphabet);
    }, [currentRoundIndex]); // 🔹 Se ejecuta cada vez que cambia de ronda para mezclar de nuevo

    return (
        <div className="keyboard-container">
            <div className="keyboard-grid">
                {shuffledLetters.map((letter) => (
                    <button
                        key={letter}
                        className="key-button"
                        onClick={() => onKeyPress(letter)}
                    >
                        {letter}
                    </button>
                ))}
                <button className="key-button delete-button" onClick={onDelete}>
                    ⌫ Borrar
                </button>
            </div>
        </div>
    );
};