import { useState } from 'react'
import '../styles/inputs.css'
import List from './List'
function Input() {
    const [items, setItems] = useState([])
    const [input, setInput] = useState("")
    const [description, setDescription] = useState("")
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleClick = () => {
        let taskItem = {
            name: input,
            describe: description,
            complete: false,
            id: items.length === 0 ? 1 : items[items.length - 1].id + 1
        }
        if (input !== "" && description !== "") {

            setItems([...items, taskItem])
            setInput("")
            setDescription("")
        }
    }

    const handleComplete = (id) => {
        let newItem = items.map((v)=>{
            if(v.id === id){
                return {...v, complete: true}
            }
            return v
        })
        setItems(newItem)
    };
    
    const handleDelete = (id) => {
        setItems(items.filter((item) => item.id !== id));
    }
    // console.log(items);

    return (
        <>
            <div className='inputContainer'>
                <div className="name">
                    <label htmlFor="task" >Name</label>
                    <br />
                    <input id="task" type="text" onChange={handleInput} value={input} />
                </div>
                <div className='description'>
                    <label htmlFor='description'>Description</label>
                    <br />
                    <input id='description' type='text' onChange={handleDescription} value={description}/>
                </div>
                <button className='add' onClick={handleClick}>Add</button>
            </div>
            <br />
            <div className='listContainer'>
                <List items={items} handleComplete={handleComplete} handleDelete = {handleDelete}/>
            </div>
        </>
    )
}

export default Input