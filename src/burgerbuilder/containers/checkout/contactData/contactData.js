import React, { Component } from "react";
import Button from "../../../components/ui/button/button";
import tw,{styled} from "twin.macro";
import axios from "../../../../axios/axios-orders";
import Spinner from "../../../components/ui/spinner/spinner"
import Input from "../../../components/ui/input/input";

const Form = styled.form`
    ${tw`w-4/5 lg:w-4/6 flex flex-col pb-4 my-4`}
`

const FormControl = tw.div`
    lg:mr-3 my-2 p-1 bg-white md:mr-3 flex border border-yellow-300 rounded
`

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        isLoading: false,
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        console.log(this.props.ingredient);
        const order = {
            ingredients: this.props.ingredient,
            price: this.props.price,
            customer: {
                name: 'Senninseyi',
                address: {
                    street: 'Surulere',
                    zipCode: '41351',
                    country: 'Nigeria'
                },
                email: 'seyi.oyebamiji@gmail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
        }

    render(){
        let form = (
            <Form>
                    <div className="flex-1 flex flex-col w-full md:flex-row">
                        <div className="w-full flex-1 mx-2">
                            <Input type="text" name="name" placeholder="Enter your name"/>
                        </div>

                        <div className="w-full flex-1 mx-2">
                            <Input type="email" name="email" placeholder="Enter your email"/>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col w-full md:flex-row">
                        <div className="w-full flex-1 mx-2">
                            <Input type="text" name="street" placeholder="Your street"/>
                        </div>

                        <div className="w-full flex-1 mx-2">
                            <Input type="text" name="postcode" placeholder="Your post code"/>
                        </div>
                    </div>

                    <Button clicked={this.orderHandler}>
                        Order
                    </Button>
                </Form>
        );
        if (this.state.isLoading) {
            form = <Spinner/>
        }

        return(
            <div className="text-center flex flex-col justify-center items-center w-auto">
                <h4 className="text-2xl font-semibold"> Enter your ContactData </h4>
                {form}
            </div>
        )
    }
}

export default ContactData