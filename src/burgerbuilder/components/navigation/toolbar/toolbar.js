import React from "react";
import { Toolbar, Nav } from "./theme";
import Logo from "../../logo/logo";
import NavigationItems from "../navigationItems/navigationItems";
import DrawerToggle from "../drawerToggle/drawerToggle";

const toolbar = (props) => (
    <Toolbar>
        <DrawerToggle clicked={props.drawerToggleClick} />
        <Logo height="80%"/>
        <Nav className="DesktopOnly Tablet">
            <NavigationItems/>
        </Nav>
    </Toolbar>
);

export default toolbar;