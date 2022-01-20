import React, { Component } from 'react'
import Input from '../../components/ui/input/input'
import Button from '../../components/ui/button/button'

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
            <Input 
                key={formEl.id}
                elementType={formEl.config.elementType} 
                elementConfig={formEl.config.elementConfig}
                invalid={!formEl.config.valid}
                value={formEl.config.value}
                touched={formEl.config.touched}
                changed={(e)=> this.inputChangedHandler(e, formEl.id)}/>
        })

        return (
            <div>
                <form>
                    {form}
                    <Button btnType="Success"> Submit</Button>
                </form>
            </div>
        )
    }
}