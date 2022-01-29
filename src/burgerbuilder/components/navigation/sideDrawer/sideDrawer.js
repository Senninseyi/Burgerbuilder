import React from "react";
import tw,{styled} from 'twin.macro';
import Logo from '../../logo/logo.js';
import NavigationItems from "../navigationItems/navigationItems.js";
import Backdrop from "../../ui/backdrop/backdrop.js";
import Aux from "../../../auxillary/auxillary.js";

const SideDrawer = styled.div`
    ${tw`fixed w-[280px] h-full left-0 top-0 z-[200] bg-white py-4 px-2 box-border lg:hidden md:hidden`}

    transition: transform 0.3s ease-out;

    &.open {
        transform: translateX(0)
    }

    &.close {
        transform: translateX(-100%)
    }
`

const sideDrawer = (props) => {

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <SideDrawer className={props.open ? 'open' : 'close'} onClick={props.closed}>
                <Logo height="11%"/>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </SideDrawer>
        </Aux>
    )
}

export default sideDrawer;