import React from 'react'
import { useState,useEffect,useMemo } from 'react'

function Effectprg() {
    var [count,setCount]=useState(0);
    var [product,setPrd]=useState(0);
    var [flag,setFlag]=useState(0);
    useEffect(()=>{
        console.log('useeffectcount')
        document.title='the count is ${count}';
    },[count]
    )
    useEffect(()=>{
        console.log('product')
    },[product])
    const flaghandler=useMemo(()=>{
        return product*2;
    },[count])

  return (<>
  <h1>the count is {count}</h1>
  <button onClick={()=>
  {
    setCount(count+1)
  }}>
    increment
  </button>
  <h1>THe product count {product}</h1>
  <button onClick={()=>
  {
    setPrd(product+1);
    setFlag(flag+1);
  }}>
    product increment
  </button>
  <h1>{flaghandler}</h1>

  </>
    
  );
}

export default Effectprg;