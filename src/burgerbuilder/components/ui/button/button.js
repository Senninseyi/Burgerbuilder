import React from 'react';
import tw,{styled} from 'twin.macro';

export const Buttons = styled.button`
    ${tw`text-black outline-none cursor-pointer bg-transparent p-[10px] m-[10px] font-bold`}

    &:first-of-type{
        margin-left: 0;
        padding-left: 0;
    }

    color: ${props => 
        props.primary ? '#5C9210' : '#944317'};

    .disabled {
        color: #cccccc;
    }
`

const Button = (props) => {
    return(
        <Buttons className="disabled" onClick={props.clicked}
                disabled={props.disabled}>
            {props.children}
        </Buttons>
    )
};

export default Button;