import React, {Component} from 'react';
import Aux from '../../auxillary/auxillary.js';
import BuildControls from '../../components/burger/buildControls/buildControls.js';
import Burger from '../../components/burger/burger.js';
import Modal from '../../components/ui/modal/modal.js';
import OrderSummary from '../../components/burger/orderSummary/orderSummary.js';
import axios from '../../../axios/axios-orders.js';
import Spinner from '../../components/ui/spinner/spinner.js';
import withErrorHandler from '../../withErrorHandler/withErrorHandler.js';

import { connect } from 'react-redux';
import * as burgerBuilderActions from '../../../store/actions/index';

class BurgerBuilder extends Component {
    constructor(props){
        super(props)

        this.state = {
            purchasing: false,
        }
    }

    componentDidMount() {
        this.props.onInitIngredients()
    }

    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({purchasing: true})
        } else {
            this.props.onSetRedirectPath('/checkout')
            this.props.history.push('/auth')
        }
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients).map(
            igKey => {
                return ingredients[igKey]
            }
        ).reduce((sum, el) => {
            return sum + el;
        }, 0);
        return sum > 0
    }


    purchaseContinueHandler = () => {
        this.props.history.push('/checkout')
    }

    render(){
        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo <= 0
        }

        let orderSummary = null;

        let burger = this.props.error ? <p> ingredients cannot be loaded</p> : <Spinner />

        if(this.props.ings){
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls 
                        ingredientsAdded={this.props.onIngredientAdded}
                        ingredientsRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price={this.props.price}
                        isAuth={this.props.isAuthenticated}
                        ordered={this.purchaseHandler}
                        purchasable={this.updatePurchaseState(this.props.ings)}/>
                </Aux>
            )
            orderSummary = <OrderSummary 
                ingredients={this.props.ings}
                price={this.props.price}
                purchaseCancel={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}/>
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
};

const mapStateToProps = state => {
    return {
        ings: state.burgerbuilder.ingredients,
        price: state.burgerbuilder.totalPrice,
        error: state.burgerbuilder.error,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredients(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredients(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
        onInitPurchased: () => dispatch(burgerBuilderActions.purchaseInit()),
        onSetRedirectPath: (path) => dispatch(burgerBuilderActions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(BurgerBuilder, axios))