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
import * as actionTypes from '../../../store/actions/action.js';

class BurgerBuilder extends Component {
    constructor(props){
        super(props)

        this.state = {
            purchasing: false,
            isLoading: false,
            error: false,
        }
    }

    componentDidMount() {
        // axios.get('/ingredients.json')
        //     .then( response => {
        //         console.log(response);
        //         this.setState({
        //             ingredients: response.data,
        //         })
        //     })
        //     .catch(error => {
        //         this.setState({error: true});
        // })
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
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

        let burger = this.state.error ? <p> ingredients cannot be loaded</p> : <Spinner />

        if(this.props.ings){
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls 
                        ingredientsAdded={this.props.onIngredientAdded}
                        ingredientsRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price={this.props.price}
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

        if (this.state.isLoading) {
            orderSummary = <Spinner/>
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
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENTS, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENTS, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(BurgerBuilder, axios))