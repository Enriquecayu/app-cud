import React, { useState, useEffect } from 'react';
import { LetterSlots } from '../components/LetterSlots';
import { VirtualKeyboard } from '../components/VirtualKeyboard';
import { playAudio, playWordAudio } from '../utils/speech';
import '../styles/GameView.css'; // 🔹 Importamos los estilos limpios

export const GameView = ({ level, onNextLevel, onBack }) => {
    const [currentInput, setCurrentInput] = useState('');
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        setCurrentInput('');
        setFeedback('');
    }, [level]);

    const handleKeyPress = (letter) => {
        const targetNoSpaces = level.target.replace(/\s/g, '');
        const isLastLetter = currentInput.length + 1 === targetNoSpaces.length;

        if (currentInput.length < targetNoSpaces.length) {
            const newInput = currentInput + letter;
            setCurrentInput(newInput);

            if (isLastLetter) {
                validateAnswer(newInput);
            } else {
                playAudio(letter);
            }
        }
    };

    const handleDelete = () => {
        setCurrentInput((prev) => prev.slice(0, -1));
        setFeedback('');
    };

    const validateAnswer = (inputString) => {
        let reconstructed = '';
        let inputIndex = 0;
        for (let i = 0; i < level.target.length; i++) {
            if (level.target[i] === ' ') {
                reconstructed += ' ';
            } else {
                reconstructed += inputString[inputIndex] || '';
                inputIndex++;
            }
        }

        if (reconstructed === level.target) {
            setFeedback('¡CORRECTO!');
            playAudio('correcto');
            setTimeout(() => {
                playWordAudio(level.target);
            }, 900);
        } else {
            setFeedback('INCORRECTO');
            playAudio('incorrecto');
        }
    };

    const isCorrect = feedback === '¡CORRECTO!';

    return (
        <div className="game-container">
            <div>
                <div className="top-bar">
                    <button onClick={onBack} className="back-button">
                        ⬅ Volver
                    </button>
                </div>
                <h2 className="game-title">
                    Nivel {level.id}: {level.hint}
                </h2>

                <div className="image-container">
                    <img src={level.image} alt="Nivel" className="game-image" />
                </div>

                <div className="slots-container">
                    <LetterSlots target={level.target} currentInput={currentInput} />
                </div>

                {feedback && (
                    <div className={`feedback-box ${isCorrect ? 'correct' : 'incorrect'}`}>
                        <h3 className={`feedback-text ${isCorrect ? 'correct' : 'incorrect'}`}>
                            {feedback}
                        </h3>
                    </div>
                )}
            </div>

            <div style={{ width: '100%', marginBottom: '10px' }}>
                <VirtualKeyboard onKeyPress={handleKeyPress} onDelete={handleDelete} />

                {isCorrect && (
                    <button onClick={onNextLevel} className="next-button">
                        Siguiente Nivel ➡
                    </button>
                )}
            </div>
        </div>
    );
};