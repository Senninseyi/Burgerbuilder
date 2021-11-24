import React, { Component } from "react";
import Order from "../../components/order/order";
import axios from "../../../axios/axios-orders";
import withErrorHandler from "../../withErrorHandler/withErrorHandler";
import tw, {styled} from 'twin.macro';

const Ordered = styled.div`
    ${tw`grid grid-cols-1 lg:grid-cols-3`}
`

class Orders extends Component {
    state = {
        orders: [],
        isLoading: true,
    }

    componentDidMount() {
        axios.get('/orders.json')
        .then(res => {
            const fetchedOrder = []
            for (let key in res.data) {
                fetchedOrder.push({
                    ...res.data[key],
                    id: key,
                })
            }
            this.setState({isLoading:false, orders:fetchedOrder})
        })
            .catch( error => {
                this.setState({isLoading:false})
            }
        )
    }

    render(){
        return(
            <Ordered>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}/>
                ))}
            </Ordered>
        )
    }
}

export default withErrorHandler(Orders, axios)