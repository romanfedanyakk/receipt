import React from 'react';
import  "./RecipeListData";
import "./recipe_list.css"

const RecipeList = ({dataa}) => {
    return (
        <div className="recipeList">
            <img src={dataa.image} alt={dataa.name}/>
            <h3 className="background">{dataa.name}</h3>
            <button>Show Details!</button>
        </div>
    )
};

export default RecipeList;