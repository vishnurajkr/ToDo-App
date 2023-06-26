import logo from './logo.svg';
import './App.css';
import { useState,usEeffect,useMemo } from 'react';
import Todo from './components/TODO APP/Todo';

function App() {
  
  // const [count,setCount]=useState(0);
  // const [item,setItem]=useState(0);
  // const multicounts=useMemo(()=>{
  //   console.log('multicounts')
  //   return count*5;

  // },[count])
  return(
    <Todo />
  //   <>
  //   <h3>
  //     the count: {count}
  //   </h3>
  //   <button onClick={()=>setCount(count+1)}>
  //     increment
  //   </button>
  //   <h3>itemincrement {item}</h3>
  //   <h4>Count multi: {multicounts}</h4>
  //   <button onClick={()=>setItem(item*10)}>item increment</button>


    
  )
  
}

export default App;
