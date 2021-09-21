import React from "react";
import tw from 'twin.macro'
import burgerLogo from '../../../assets/logo.png';

const Logo = tw.img`
    h-full
`

const LogoContainer = tw.div`
    bg-white h-[100%] p-2 box-border rounded
`

const logo = (props) => (
    <LogoContainer style={{height: props.height}}>
        <Logo src={burgerLogo} alt="myBurger" />
    </LogoContainer>
)

export default logo;