import React,{useState} from 'react'
import Header from './Header'
import Button from './Button'
const Counter = () => {
const [count, setcount] = useState(0);
const handleClick=(value:number)=>
{
    setcount(count+value);
}

  return (
    <div>
        <Header>
            <div>Child Counter Header</div>
        </Header>
        <Header label={ `${count}`} />
        <Button label="Add" handleClick={()=>handleClick(1)}/>
        <Button label="Reduce" handleClick={()=>handleClick(-1)}/>
    </div>
  )
}

export default Counter