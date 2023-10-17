import { useState } from "react"
import Err from "./Error.css"

// console.log(Err)

function Error ({recurringItem, CloseError}) {

    return (
        <div className={`Error_Container`}>
            <button onClick={CloseError}>X</button>
            <span>ERROR:</span> You already have 
            <span>{recurringItem}</span>
        </div>
    )
}

export default Error