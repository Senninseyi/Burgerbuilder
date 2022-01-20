import React from 'react';
import tw,{styled} from 'twin.macro';

export const Buttons = styled.button`
    ${tw`text-black outline-none cursor-pointer my-3 font-bold`}

    padding: 10px;
    margin-right: 10px;
    color: white;
    background-color: ${props => 
        props.primary ? '#944317' : 'red' };

    .disabled {
        color: #cccccc;
    }
`

const Button = (props) => {
    return(
        <Buttons className="disabled" primary={props.primary} onClick={props.clicked}>
            {props.children}
        </Buttons>
    )
};

export default Button;