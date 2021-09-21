import React, { Component } from "react";
import Button from "../../../components/ui/button/button";
import tw,{styled} from "twin.macro";
import axios from "../../../../axios/axios-orders";

const Input = styled.input`
    ${tw`text-black font-semibold bg-white outline-none pl-3 py-3 w-full`}
`

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

    orderHandler = (e) => {
        e.preventDefault()
        console.log(this.props.ingredients);

        this.setState({isLoading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Senninseyi',
                address: {
                    state: 'Lagos',
                    country: 'Nigeria'
                },
                email: 'seyi.oyebamiji@gmail.com',
            },
            deliverymethod: 'fastest',
        }

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        axios.post('/orders.json',order,config)
            .then(response => {
                this.setState({isLoading: false});
                console.log(response);
            })
            .catch(error => {
                this.setState({isLoading: false});
                console.log(error);
            });
    }

    render(){

        return(
            <div className="text-center flex flex-col justify-center items-center w-auto">
                <h4 className="text-2xl font-semibold"> Enter your ContactData </h4>
                <Form>
                    <div className="flex-1 flex flex-col w-full md:flex-row">
                        <div className="w-full flex-1 mx-2">
                            <FormControl>
                                <Input type="text" name="name" placeholder="Enter your name"/>
                            </FormControl>
                        </div>

                        <div className="w-full flex-1 mx-2">
                            <FormControl>
                                <Input type="email" name="email" placeholder="Enter your email"/>
                            </FormControl>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col w-full md:flex-row">
                        <div className="w-full flex-1 mx-2">
                            <FormControl>
                                <Input type="text" name="street" placeholder="Your street"/>
                            </FormControl>
                        </div>

                        <div className="w-full flex-1 mx-2">
                            <FormControl>
                                <Input type="text" name="postcode" placeholder="Your post code"/>
                            </FormControl>
                        </div>
                    </div>

                    <Button clicked={this.orderHandler}>
                        Order
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ContactData