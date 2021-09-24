import React, { Component } from "react";
import Order from "../../components/order/order";

class Orders extends Component {
    render(){
        return(
            <div>
                <Order/>
                <Order/>
            </div>
        )
    }
}

export default Orders