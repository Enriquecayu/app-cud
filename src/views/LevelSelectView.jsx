import React from 'react';
import '../styles/LevelSelectView.css';

export const LevelSelectView = ({ category, onSelectLevel, onBack }) => {
    return (
        <div className="level-select-container">
            <div className="level-header">
                <button onClick={onBack} className="back-button">
                    ⬅ Volver
                </button>
                <h2 className="level-select-title">{category.title}</h2>
            </div>

            <div className="levels-grid">
                {category.levels.map((level, index) => (
                    <div
                        key={level.id}
                        className="level-card"
                        onClick={() => onSelectLevel(index)}
                    >
                        <img src={level.image} alt={level.target} />
                        <h4>Nivel {level.id}</h4>
                        <span>{level.hint}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};