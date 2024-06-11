// Categories.js
import React, { useState } from 'react';
import './categories.css';
import ReviewList from '../ReviewList/ReviewList'; // Import the ReviewList component

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState('Movies');

    const categories = ['Movies', 'Books', 'Series', 'Anime'];

    return (
        <div className="category-selector">
            <h1 className="category-title">Select a Category</h1>
            <div className="buttons-container">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="category-content">
                {/* Conditionally render the ReviewList component based on the selected category */}
                {selectedCategory === 'Movies' && <ReviewList category="Movies" />}
                {selectedCategory === 'Books' && <ReviewList category="Books" />}
                {selectedCategory === 'Series' && <ReviewList category="Series" />}
                {selectedCategory === 'Anime' && <ReviewList category="Anime" />}
            </div>
        </div>
    );
};

export default Categories;


