import React from 'react';
import tw,{styled} from 'twin.macro';

export const Buttons = styled.button`
    ${tw`text-black outline-none cursor-pointer my-3 
        font-bold disabled:bg-gray-700 disabled:cursor-not-allowed
        disabled:border-black`}

    padding: 10px;
    margin-right: 10px;
    color: white;
    background-color: ${props => 
        props.primary ? '#944317' : 'red' };
`

const Button = (props) => {
    return(
        <Buttons 
            primary={props.primary} 
            onClick={props.clicked}>
            {props.children}
        </Buttons>
    )
};

export default Button;