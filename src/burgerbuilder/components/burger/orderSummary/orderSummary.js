import React, { Component } from 'react';
import Aux from '../../../auxillary/auxillary.js';
import Button from '../../ui/button/button.js';
import { Checkout, Description, OrderTitle, SummaryContainer } from './theme.js';

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
                <SummaryContainer>
                    <OrderTitle>Your Order</OrderTitle>
                    <Description>A delicious burger with the following ingredients:</Description>
                    <ul>
                        {ingredientSummary}
                    </ul>
                    <Checkout>Continue to Checkout</Checkout>
                    <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                    <div>
                        <Button clicked={this.props.purchaseCancel}>Cancel</Button>
                        <Button primary clicked={this.props.purchaseContinue}>Continue</Button>
                    </div>
                </SummaryContainer>
            </Aux>
        )
    }
}

export default OrderSummary;