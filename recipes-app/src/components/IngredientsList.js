// ./src/components/IngredientsList.js

import React from "react";

import Ingredient from "./Ingredient";

export default function IngredientsList( {list}) {
    return (
        <ul className="ingredients">
            {list.map((ingredient, i) => (
                <Ingredient key={i} 
                    amount = {ingredient.amount}
                    measurement = {ingredient.measurement}
                    name = {ingredient.name}
                />
            ))}
        </ul>
    );
}