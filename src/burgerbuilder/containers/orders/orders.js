import React, { Component } from "react";
import Order from "../../components/order/order";

import { connect } from "react-redux";

import axios from "../../../axios/axios-orders";
import withErrorHandler from "../../withErrorHandler/withErrorHandler";
import tw, {styled} from 'twin.macro';
import * as actions from '../../../store/actions/index'
import Spinner from "../../components/ui/spinner/spinner";

const Ordered = styled.div`
    ${tw`grid grid-cols-1 lg:grid-cols-3`}
`

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token)
    }

    render(){
        let orders = <Spinner/>;
        if (!this.props.loading) {
            orders = (
                this.props.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}/>
                ))
            )
        }
        return(
            <Ordered>
                {orders}
            </Ordered>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        loading: state.orders.loading,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrder(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios))