import React, { Component } from "react";
import { Route } from "react-router";
import CheckoutSummary from "../../components/order/checkoutSummary/checkoutSummary";
import ContactData from "./contactData/contactData";

import { connect } from "react-redux";

class Checkout extends Component {

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
                    ingredients={this.props.ings}
                    checkoutCanceled={this.checkoutCancelHandler}
                    checkoutContinue={this.checkoutContinueHandler}/>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        ings: state.ingredients,
    }
}

export default connect(mapStateToProps)(Checkout)