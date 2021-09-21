import React, { Component } from 'react';
import Aux from '../../../auxillary/auxillary.js';
import Button from '../../ui/button/button.js';

class OrderSummary extends Component {

    render(){

    const ingredientSummary = Object.keys(this.props.ingredients).map(
        igkey => {
            return <li key={igkey}>
                    <span className="capitalize">{igkey}</span>: {this.props.ingredients[igkey]}
                   </li>
        }
    )

        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to Checkout</p>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <Button clicked={this.props.purchaseCancel}>Cancel</Button>
                <Button primary clicked={this.props.purchaseContinue}>Continue</Button>
            </Aux>
        )
    }
}

export default OrderSummary;