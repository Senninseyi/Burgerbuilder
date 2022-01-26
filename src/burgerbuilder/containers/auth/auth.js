import React, { Component } from 'react'
import Input from '../../components/ui/input/input'
import Button from '../../components/ui/button/button'
import tw, { styled } from 'twin.macro'

import * as actions from '../../../store/actions/index'
import { connect } from 'react-redux'

import Spinner from '../../components/ui/spinner/spinner'

const AuthContainer = styled.div`
    ${tw`flex justify-center mt-24 flex-col items-center`}
` 

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 7,
                },
                valid: false,
                touched: false,
            }
        },
        isSignUp: true,
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

    inputChangedHandler = (e, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: e.target.value,
                valid: this.checkValidity(e.target.value, this.state.controls[controlName].validation),
                touched: true,
            }
        }

        this.setState({controls: updatedControls})
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp)
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignUp: !prevState.isSignUp}
        })
    }
    
    render() {

        const formElementsArray = [];
        for (let key in this.state.controls){
            formElementsArray.push({
                id: key,
                config: this.state.controls[key],
            })
        }

        let form = formElementsArray.map(formEl => {
            return (
                <Input 
                    key={formEl.id}
                    elementType={formEl.config.elementType} 
                    elementConfig={formEl.config.elementConfig}
                    invalid={!formEl.config.valid}
                    value={formEl.config.value}
                    touched={formEl.config.touched}
                    changed={(e)=> this.inputChangedHandler(e, formEl.id)}/>
            )
        })

        if (this.props.loading) {
            form = <Spinner/>
        }

        let errorMessages = null;
        if (this.props.error) {
            errorMessages = (
                <p>{this.props.error.message}</p>
            )
        }
        

        return (
            <AuthContainer>
                {errorMessages}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button primary> Submit</Button>
                </form>
                <Button 
                    clicked={this.switchAuthModeHandler}
                    primary>
                        Switch to {this.state.isSignUp ? 'SignIn' : 'SignUp'}
                </Button>
            </AuthContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)