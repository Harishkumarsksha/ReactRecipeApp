import React from 'react'
import styles from './recipe.module.css'
const Recipe = ({ title, calories, img, ingredients }) => {
    // console.log(ingredients)
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <ul>
                <b>Ingredients :</b>{ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient.text}</li>
                ))}
            </ul>
            <p> <b>Calories:</b> {calories}</p>

            <img className='image' src={img} alt='' />
        </div>
    );
};

export default Recipe;