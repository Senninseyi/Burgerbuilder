import * as actionTypes from './actionTypes'
import axios from '../../axios/axios-orders'

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
    }
}

export const purchaseBurgerFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error,
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
        axios.post( '/orders.json?auth=' + token, orderData )
            .then( response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData) )
            } )
            .catch( error => {
                dispatch(purchaseBurgerFailed(error))
            } );
    }
}

export const purchaseInit = () =>{
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrderSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders,
    }
}

export const fetchOrderFailed = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAILED,
        error: error,
    }
}

export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START,
    }
}

export const fetchOrder = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrderStart())
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'
        axios.get('/orders.json' + queryParams)
        .then(res => {
            const fetchedOrder = []
            for (let key in res.data) {
                fetchedOrder.push({
                    ...res.data[key],
                    id: key,
                })
            }
            dispatch(fetchOrderSuccess(fetchedOrder))
        })
            .catch( error => {
                dispatch(fetchOrderFailed(error))
            }
        )
    }
}