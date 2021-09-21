import React from 'react';
import { BuildControls, OrderBtn } from './theme';
import BuildControl from './buildControl/buildControl';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
]

const buildControls = (props) => (
    <BuildControls>
        <p>Current Price: {props.price.toFixed(2)}</p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientsAdded(ctrl.type)}
                removed={() => props.ingredientsRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        ))}
        <OrderBtn
            disabled={!props.purchasable}
            onClick={props.ordered}>Order Now</OrderBtn>
    </BuildControls>
)

export default buildControls;