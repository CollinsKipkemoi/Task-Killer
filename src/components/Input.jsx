import { useState } from 'react'
import '../styles/inputs.css'
function Input() {
    const [items, setItems] = useState([])
    const [input, setInput] = useState("")
    const [description, setDescription] = useState("")
    const handleInput = (e) =>{
        setInput(e.target.value)
    }
    const handleDescription = (e) =>{
        setDescription(e.target.value)
    }
    const handleClick = () =>{
        let taskItem = {
            name: input,
            describe: description,
            complete: false,
        }
        setItems([...items, taskItem])
    }
    console.log(items)


    return (
        <div className='inputContainer'>
            <div className="name">
                <label htmlFor="task" >Name</label>
                <br />
                <input id="task" type="text" onChange={handleInput} />
            </div>
            <div className='description'>
                <label htmlFor='description'>Description</label>
                <br />
                <input id='description' type='text' onChange={handleDescription}/>
            </div>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Input