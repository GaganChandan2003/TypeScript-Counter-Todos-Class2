import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Header from './Header'
import TodoItem from './TodoItem';
import TodosInput from './TodosInput';

export interface TodoItems{
    id:number;
    title:string;
    status:boolean;
}
const Todos = () => {
    const [todos, settodos] = useState<TodoItems[]>([]);
    const handleAdd=(title:string)=>
    {
        const payload={
            title,
            status:false,
            id:todos.length+1
        };

        axios.post("http://localhost:8080/todos",payload)
        .then(getTodos);
    }

    const getTodos=()=>
    {
        axios.get("http://localhost:8080/todos")
        .then(({data}:{data:TodoItems[]})=>
        {
            settodos(data);
        })
    }
    useEffect(()=>
    {
       getTodos();
    },[])
  return (
    <div>
        <Header label="Todos"/>
        <TodosInput onClick={handleAdd}/>
        {
            todos.length>0&&
            todos.map((el)=>
            {
                return <TodoItem key={el.id} {...el}/>
            })
        }
        
    </div>
  )
}

export default Todos