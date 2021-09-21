import React from "react";
import Burger from "../../burger/burger";
import Button from "../../ui/button/button";

const checkoutSummary = (props) => {
    return (
        <div className="text-center m-auto w-auto">
            <h1 className="text-bold text-2xl"> We hope it taste well</h1>
            <div className="w-full m-auto">
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                clicked={props.checkoutCanceled}> Cancel</Button>
            <Button 
                primary
                clicked={props.checkoutContinue}> Continue</Button>
        </div>
    )
}

export default checkoutSummary;