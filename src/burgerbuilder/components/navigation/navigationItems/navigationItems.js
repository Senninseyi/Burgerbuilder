import React from "react";
import tw from 'twin.macro';
import NavigationItem from "./navigationItem/navigationItem";

const NavigationItems = tw.ul`
    m-0 p-2 lg:p-0 md:p-0 list-none flex items-center h-full flex-col lg:flex-row md:flex-row
`

const navigationItems = () => (
    <NavigationItems>
        <NavigationItem link="/" active> BurgerBuilder</NavigationItem>
        <NavigationItem link=""> Checkout</NavigationItem>
    </NavigationItems>
);

export default navigationItems;