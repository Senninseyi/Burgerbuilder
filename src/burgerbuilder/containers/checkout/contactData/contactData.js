import React, { Component } from "react";
import Button from "../../../components/ui/button/button";
import tw,{styled} from "twin.macro";
import axios from "../../../../axios/axios-orders";
import Spinner from "../../../components/ui/spinner/spinner"
import Input from "../../../components/ui/input/input";

const Form = styled.form`
    ${tw`w-4/5 flex flex-col items-center p-6 my-4 shadow`}
`

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip code',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 6,
                },
                valid: false,
                touched: false,
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' },
                    ]
                },
                value: '',
                validation: {},
                valid: false,
                touched: false,
            },
        },
        formIsvalid: false,
        isLoading: false,
    }

    checkValidity(value, rules) {

        let isValid = true

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        const formData = {}
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredient,
            price: this.props.price,
            orderData: formData
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

    inputChangedHandler = (e, inputIdentifier) => {
        const updatedOrderform = {
            ...this.state.orderForm
        }

        const updatedFormElement = {
            ...updatedOrderform[inputIdentifier]
        }

        updatedFormElement.value = e.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderform[inputIdentifier] = updatedFormElement;
        
        let formIsvalid = true;
        for (let inputIdentifier in updatedOrderform){
            formIsvalid = updatedOrderform[inputIdentifier].valid && formIsvalid
        }

        // console.log(formIsvalid) debugging formvalidity

        this.setState({
            orderForm: updatedOrderform,
            formIsvalid: formIsvalid
        })
    }

    render(){

        const formElementsArray = [];
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key],
            })
        }

        let form = (
            <Form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElements => {
                    return(
                        <Input key={formElements.id} 
                               elementType={formElements.config.elementType} 
                               elementConfig={formElements.config.elementConfig}
                               invalid={!formElements.config.valid}
                               value={formElements.config.value}
                               touched={formElements.config.touched}
                               changed={(e)=> this.inputChangedHandler(e, formElements.id)}/>
                    )
                })}
                <Button clicked={this.orderHandler} 
                        disabled={!this.state.formIsvalid}>
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