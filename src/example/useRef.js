import React, { useRef } from "react";

function UseRef(props) {

    const textInput = useRef(null)

    function handleClick() {
        textInput.current.focus()
    }

    return(
        <div>
            <input 
                type="text" 
                ref={textInput}/>
            <input type="button" value="focus the text input" onClick={handleClick}/>
        </div>
    )
}

export default UseRef