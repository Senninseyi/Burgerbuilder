import React, { Component } from "react";
import { Route, Redirect } from "react-router";
import CheckoutSummary from "../../components/order/checkoutSummary/checkoutSummary";
import ContactData from "./contactData/contactData";

import { connect } from "react-redux";

class Checkout extends Component {

    // componentWillMount () {
    //     this.props.onInitPurchase();
    // }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }

    render(){
        let summary = <Redirect to='/'/>
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to='/'/> : null
            summary = (
                <>
                    {purchasedRedirect}
                    <CheckoutSummary 
                        ingredients={this.props.ings}
                        checkoutCanceled={this.checkoutCancelHandler}
                        checkoutContinue={this.checkoutContinueHandler}/>
                    <Route 
                        path={this.props.match.path + '/contact-data'} 
                        component={ContactData}/>
                </>
            )
        }
        return summary
    }
}

const mapStateToProps = state => {
    return{
        ings: state.burgerbuilder.ingredients,
        purchased: state.orders.purchased,
    }
}

export default connect(mapStateToProps)(Checkout)