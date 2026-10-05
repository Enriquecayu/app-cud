import React, { useState, useEffect } from 'react';
import { VirtualKeyboardCompetitive } from '../components/VirtualKeyboardCompetitive';
import '../styles/GameView.css';

export const CompetitiveGameView = ({ levelData, onBack }) => {
    // 🔹 Barajamos las rondas directamente al inicializar el estado del componente
    const [shuffledRounds, setShuffledRounds] = useState(() => {
        if (!levelData || !levelData.rounds) return [];
        const roundsCopy = [...levelData.rounds];
        for (let i = roundsCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [roundsCopy[i], roundsCopy[j]] = [roundsCopy[j], roundsCopy[i]];
        }
        return roundsCopy;
    });

    const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
    const [userInput, setUserInput] = useState('');

    const [secondsElapsed, setSecondsElapsed] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    // Verificación de seguridad por si no llegan datos
    if (!shuffledRounds || shuffledRounds.length === 0) {
        return (
            <div className="game-container" style={{ textAlign: 'center', justifyContent: 'center' }}>
                <h3>⚠️ Error: No se encontraron rondas para este nivel.</h3>
                <button onClick={onBack} className="back-button" style={{ marginTop: '20px' }}>
                    Volver
                </button>
            </div>
        );
    }

    const currentRound = shuffledRounds[currentRoundIndex];

    // Cronómetro global
    useEffect(() => {
        if (isFinished) return;

        const timer = setInterval(() => {
            setSecondsElapsed((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isFinished]);

    // Manejar pulsación de teclas
    const handleKeyPress = (letter) => {
        if (isFinished) return;
        const nextInput = userInput + letter;
        setUserInput(nextInput);

        if (nextInput === currentRound.target) {
            setTimeout(() => {
                if (currentRoundIndex + 1 < shuffledRounds.length) {
                    setCurrentRoundIndex((prev) => prev + 1);
                    setUserInput('');
                } else {
                    setIsFinished(true);
                }
            }, 300);
        }
    };

    const handleDelete = () => {
        setUserInput((prev) => prev.slice(0, -1));
    };

    const formatTime = (totalSeconds) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    if (isFinished) {
        return (
            <div className="game-container" style={{ textAlign: 'center', justifyContent: 'center' }}>
                <h2>🎉 ¡Desafío Competitivo Completado!</h2>
                <p>Nivel: <strong>{levelData.title}</strong></p>
                <div style={{ fontSize: '2.5rem', margin: '20px 0', color: '#2563eb' }}>
                    ⏱ {formatTime(secondsElapsed)}
                </div>
                <p>¡Excelente concentración y reflejos!</p>
                <button onClick={onBack} className="back-button" style={{ marginTop: '20px', padding: '10px 20px' }}>
                    Volver al Menú
                </button>
            </div>
        );
    }

    return (
        <div className="game-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
                <button onClick={onBack} className="back-button">⬅ Salir</button>
                <span style={{ fontWeight: 'bold' }}>Ronda {currentRoundIndex + 1} / {shuffledRounds.length}</span>
                <span style={{ background: '#e2e8f0', padding: '4px 8px', borderRadius: '8px', fontWeight: 'bold' }}>
                    ⏱ {formatTime(secondsElapsed)}
                </span>
            </div>

            <h3 className="game-hint">{currentRound.hint}</h3>

            <div className="game-image-container">
                <img src={currentRound.image} alt="Objetivo" className="game-image" />
            </div>

            <div className="word-slots-container">
                {currentRound.target.split('').map((_, index) => (
                    <div key={index} className="letter-slot">
                        {userInput[index] || ''}
                    </div>
                ))}
            </div>

            <VirtualKeyboardCompetitive
                currentRoundIndex={currentRoundIndex}
                onKeyPress={handleKeyPress}
                onDelete={handleDelete}
            />
        </div>
    );
};