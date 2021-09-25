import React from "react"
import styled from "@emotion/styled"

const Input = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 8px;
    }

    &.inputElement {
        outline: none;
        border: 1px solid #ccc;
        background-color: white;
        font: inherit;
        padding: 6px 10px;
        display: block;
        width: 100%;

        &:focus{
            outline: none;
            background-color: #ccc;
        }
    }

`

const input = (props) => {

    let inputElement = null

    switch(props.inputType) {
        case ('input'):
            inputElement = <input {...props}/>
            break;
        case ('textarea'):
            inputElement = <textarea {...props}/>
            break;
        default:
            inputElement = <input {...props}/>
    }

    return(
        <Input>
            <label>{props.label}</label>
            {inputElement}
        </Input>
    )
}

export default input