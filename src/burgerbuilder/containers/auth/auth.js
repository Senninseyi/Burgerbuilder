import React, { Component } from 'react'
import Input from '../../components/ui/input/input'
import Button from '../../components/ui/button/button'
import tw, { styled } from 'twin.macro'

const AuthContainer = styled.div`
    ${tw`flex justify-center mt-24`}
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
        }
    }
    
    render() {

        const formElementsArray = [];
        for (let key in this.state.controls){
            formElementsArray.push({
                id: key,
                config: this.state.controls[key],
            })
        }

        const form = formElementsArray.map(formEl => {
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

        return (
            <AuthContainer>
                <form>
                    {form}
                    <Button primary> Submit</Button>
                </form>
            </AuthContainer>
        )
    }
}

export default Auth