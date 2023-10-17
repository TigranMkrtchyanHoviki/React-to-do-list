import { useRef, useState } from "react"
import "./Form.css"

function Form ({Add}) {
    
    const [text, setValue] = useState("")

    return (
        <div className="Form_Container">
            <form 
                onSubmit={(e) => {
                e.preventDefault()
                Add(text)
                setValue("")
            }}>
                <input 
                   type="text"
                   value={text}
                   onChange={(e) => setValue(e.target.value)}
                ></input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form