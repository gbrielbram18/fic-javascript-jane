import React, { useState } from 'react'
import "./style.css"

export default function Count() {
    const [count, setCount] = useState(0);


//Função para aumentar o valor do estado
    const aumentar= ()=> {
        setCount(count + 1);
    }
    //função para diminuir o valor
    const diminuir= () => {
        setCount(count - 1);
    }


  return (
    <div className= "container">
        <h1>{count}</h1>


        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>

    </div>
  )
}
