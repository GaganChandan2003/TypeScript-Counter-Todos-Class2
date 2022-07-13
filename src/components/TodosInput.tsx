import React,{useState} from 'react'

interface TodosInputProps{
    onClick:(value:string)=>void;
}
const TodosInput = ({onClick}:TodosInputProps) => {
    const [text, settext] = useState("");
    const changeHandler:React.
    ChangeEventHandler<HTMLInputElement>=(e)=>
    {
        settext(e.target.value)
    };
    const handleAdd: React.
    MouseEventHandler<HTMLButtonElement>=()=>
    {
        onClick(text);
    }
  return (
    <div>
        <input type={text} value={text} onChange={changeHandler} />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodosInput