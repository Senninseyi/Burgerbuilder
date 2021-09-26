import React from "react"
import styled from "@emotion/styled"

const Input = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 8px;
    }

    & .inputElement {
        outline: none;
        border: 1px solid #ccc;
        background-color: white;
        font: inherit;
        padding: 6px 10px;
        display: block;
        width: 100%;

        &:focus{
            outline: none;
            background-color: #FFA700;
            color: white;
        }
    }

    & .invalid{
        width: 100%;
        border: 1px solid red;
        background-color: #FDA49A;
        padding: 6px 10px;
        outline: none;

        &:focus {
            outline: none;
        }
    }



`

const input = (props) => {

    let inputElement = null

    let validationError = null 

    if (props.invalid && props.touched) {
        validationError = <label>Please enter a valid value!</label>
    }

    switch(props.elementType) {
        case ('input'):
            inputElement = <input 
                className= { props.invalid && props.touched ? 'invalid' : 'inputElement'} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
            break;

        case ('textarea'):
            inputElement = <textarea
                className= { props.invalid && props.touched  ? 'invalid' : 'inputElement '} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
            break;

        case ('select'):
            inputElement = (
                <select
                    className= { 'inputElement '}
                    value={props.value}
                    onChange={props.changed}>
                        {props.elementConfig.options.map(options =>{
                            return(
                                <option key={options.value} value={options.value}>
                                    {options.displayValue}
                                </option>
                            )
                        })}
                </select>
             )
            break;

        default:
            inputElement = <input 
                className= { props.invalid && props.touched  ? 'invalid' : 'inputElement'}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
    }

    return(
        <Input>
            {validationError}
            {inputElement}
        </Input>
    )
}

export default input