import React, { Component } from "react";
import { Route } from "react-router";
import CheckoutSummary from "../../components/order/checkoutSummary/checkoutSummary";
import ContactData from "./contactData/contactData";

class Checkout extends Component {

    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount () {
        const query = new URLSearchParams( this.props.location.search );
        const ingredients = {};
        let price = 0;
        for ( let param of query.entries() ) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState( { ingredients: ingredients, totalPrice: price } );
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }

    render(){
        return(
            <div className="w-auto">
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCanceled={this.checkoutCancelHandler}
                    checkoutContinue={this.checkoutContinueHandler}/>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={() => (<ContactData ingredient={this.state.ingredients} price={this.state.totalPrice} />)} />
            </div>
        )
    }
}

export default Checkout