import React from "react";
import tw, {styled} from "twin.macro";

const DrawerToggle = styled.div`
    ${tw`h-full flex lg:hidden md:hidden flex-col justify-around items-center cursor-pointer box-border
        w-[40px] py-1.5 px-0`}

    &.DrawerToggle div {
        width: 90%;
        height: 3px;
        background-color: white
    }
`

const drawerToggle = (props) => (
    <DrawerToggle 
        className="DrawerToggle" 
        onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
    </DrawerToggle>
);

export default drawerToggle;