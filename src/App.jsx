import React, { useState } from 'react';
import { CategoriesView } from './views/CategoriesView';
import { LevelSelectView } from './views/LevelSelectView';
import { GameView } from './views/GameView';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(null);

  // 1. Cuando eligen una categoría, vamos al menú de niveles de esa categoría
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentLevelIndex(null); // Aún no hay un nivel seleccionado para jugar
  };

  // 2. Cuando eligen un nivel específico de la lista
  const handleSelectLevel = (index) => {
    setCurrentLevelIndex(index);
  };

  // 3. Volver al menú de categorías desde la lista de niveles
  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setCurrentLevelIndex(null);
  };

  // 4. Volver a la lista de niveles desde el juego activo
  const handleBackToLevels = () => {
    setCurrentLevelIndex(null);
  };

  // 5. Pasar al siguiente nivel o volver si se terminan
  const handleNextLevel = () => {
    if (currentLevelIndex + 1 < selectedCategory.levels.length) {
      setCurrentLevelIndex(currentLevelIndex + 1);
    } else {
      alert('¡Has completado todos los niveles de esta categoría!');
      setCurrentLevelIndex(null); // Regresa al selector de niveles
    }
  };

  // RENDERIZADO CONDICIONAL DE PANTALLAS:

  // Pantalla 1: Selector de Categorías
  if (!selectedCategory) {
    return <CategoriesView onSelectCategory={handleSelectCategory} />;
  }

  // Pantalla 2: Selector de Niveles de la categoría elegida
  if (currentLevelIndex === null) {
    return (
      <LevelSelectView
        category={selectedCategory}
        onSelectLevel={handleSelectLevel}
        onBack={handleBackToCategories}
      />
    );
  }

  // Pantalla 3: El juego en sí (`GameView`)
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