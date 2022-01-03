import React from 'react';
import BurgerIngredients from './burgerIngredient/burderIngredient';
import { Burger } from './theme';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
            return [...Array(Math.max(0, props.ingredients[igKey]))].map((_, i) =>{
                return <BurgerIngredients key={igKey + i} type={igKey}/>
            })
        }).reduce((arr,el) => {
            return arr.concat(el)
        }, []);

        console.log(transformedIngredients)

        if (transformedIngredients.length === 0) {
            transformedIngredients = <p className="font-bold text-base  font-mono">Please start adding ingredients!</p>
        }

    return(
        <Burger>
            <BurgerIngredients type="bread-top"/>
                {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </Burger>
    );
};

export default burger;