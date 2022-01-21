import React from 'react';
import tw,{styled} from 'twin.macro';

export const Buttons = styled.button`
    ${tw`outline-none cursor-pointer my-2 font-bold`}
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