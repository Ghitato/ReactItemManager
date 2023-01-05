import DataForButton from "./DataForButton"
import { useState } from "react"

function ButtonState(){

    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState("")
    //const [state variabele, function that will be used to update state] = useState()
  
    const updateCounter = () => {
      setCounter(counter + 1)
    }
  
    const updateTitle = () => {
      setTitle("We now have a title")
    }
  
    return(
    <div>
        <DataForButton buttonTitle={title} count={counter}/>
        <button onClick={updateTitle}>Update Title</button>
        <button onClick={updateCounter}>Update Counter</button>
    </div>
    )
}

export default ButtonState