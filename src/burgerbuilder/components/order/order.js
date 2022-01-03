import React from 'react';
import {styled} from 'twin.macro';

const Order = styled.div`
    width:80%;
    border:1px solid #ccc;
    box-shadow: 0 2px 3px #ccc;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
`

const order = (props) => {

    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        )
    }

    const ingredientsOutput = ingredients.map(ig => {
        return <span 
                    key={ig.name}
                    style={{
                        textTransform: 'capitalize',
                        display: 'inline-block',
                        margin: '0 8px',
                        border: '1px solid #ccc',
                        padding: '5px'
                    }}>
                        {ig.name} {ig.amount}
               </span>
    })

    return(
        <Order>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price: USD<strong> {Number.parseFloat(props.price).toFixed(2)} </strong> </p>
        </Order>    
    )
}

export default order