import React from "react";
import { NavLink } from "react-router-dom";
import tw,{styled} from 'twin.macro';

const NavigationItem = tw.li`
    my-2 box-border h-full flex items-center w-full
`

const Link = styled(NavLink)`
    ${tw`text-black font-semibold w-full lg:text-white md:text-white no-underline lg:h-full md:h-full 
    lg:px-2 lg:py-1 md:px-2 md:py-1 block lg:border-b-4 lg:border-transparent md:border-b-4 md:border-transparent 
    box-border lg:flex md:flex lg:items-center md:items-center text-left
    lg:hover:bg-[#8f5c2c] lg:hover:border-b-4 lg:hover:border-purple-500 `}

    &.active {
        color: ${tw`text-[#bf5c2c]`};
    }

    @media(min-width: 500px){
        &.active {
            color: ${tw`text-white`};
            border-bottom: ${tw`border-b-4 border-purple-500`};
            background-color: ${tw`bg-[#8f5c2c]`};
        }
    }

`

const navigationItem = (props) => (
    <NavigationItem>
        <Link to={props.link}
            exact={props.exact}>
            {props.children}
        </Link>
    </NavigationItem>
)

export default navigationItem;