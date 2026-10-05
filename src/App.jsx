import React, { useState } from 'react';
import { CategoriesView } from './views/CategoriesView';
import { LevelSelectView } from './views/LevelSelectView';
import { GameView } from './views/GameView';
import { CompetitiveGameView } from './views/CompetitiveGameView';

export function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentLevelIndex, setCurrentLevelIndex] = useState(null);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setCurrentLevelIndex(null);
    };

    const handleSelectLevel = (index) => {
        setCurrentLevelIndex(index);
    };

    const handleBackToCategories = () => {
        setSelectedCategory(null);
        setCurrentLevelIndex(null);
    };

    const handleBackToLevels = () => {
        setCurrentLevelIndex(null);
    };

    const handleNextLevel = () => {
        if (currentLevelIndex + 1 < selectedCategory.levels.length) {
            setCurrentLevelIndex(currentLevelIndex + 1);
        } else {
            alert('¡Has completado todos los niveles de esta categoría!');
            setCurrentLevelIndex(null);
        }
    };

    // 1. Pantalla de Selección de Categorías
    if (!selectedCategory) {
        return <CategoriesView onSelectCategory={handleSelectCategory} />;
    }

    // 2. Pantalla de Selección de Subniveles (tanto para categorías normales como competitivo)
    if (currentLevelIndex === null) {
        return (
            <LevelSelectView 
                category={selectedCategory} 
                onSelectLevel={handleSelectLevel} 
                onBack={handleBackToCategories} 
            />
        );
    }

    // 3. SI ES LA CATEGORÍA COMPETITIVA
    if (selectedCategory.isCompetitive) {
        const selectedSubLevel = selectedCategory.levels[currentLevelIndex];
        return (
            <CompetitiveGameView 
                levelData={selectedSubLevel} 
                onBack={handleBackToLevels} 
            />
        );
    }

    // 4. FLUJO NORMAL (Animales, Alimentos, etc.)
    const currentLevel = selectedCategory.levels[currentLevelIndex];
    return (
        <GameView 
            level={currentLevel} 
            onNextLevel={handleNextLevel} 
            onBack={handleBackToLevels} 
        />
    );
}

export default App;