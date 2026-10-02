import React from 'react';
import { categories } from '../data/categoriesData';
import '../styles/CategoriesView.css';

export const CategoriesView = ({ onSelectCategory }) => {
    return (
        <div className="categories-container">
            <h1 className="categories-title">Elige una Categoría</h1>

            <div className="categories-grid">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="category-card"
                        onClick={() => onSelectCategory(category)}
                    >
                        <span className="category-icon">{category.icon}</span>
                        <div className="category-info">
                            <h3>{category.title}</h3>
                            <p>{category.levels.length} niveles disponibles</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};