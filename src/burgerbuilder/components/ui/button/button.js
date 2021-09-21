import React from 'react';
import tw,{styled} from 'twin.macro';

export const Buttonstyles = styled.button`
    ${tw`text-black outline-none cursor-pointer bg-transparent p-[10px] m-[10px] font-bold`}

    &:first-of-type{
        margin-left: 0;
        padding-left: 0;
    }

    color: ${props => 
        props.primary ? '#5C9210' : '#944317'};
`

const Button = (props) => {
    return(
        <Buttonstyles onClick={props.clicked}>
            {props.children}
        </Buttonstyles>
    )
};

export default Button;