import React, { useState } from 'react'

interface ButtonProps {
    color: string,
    children: string
}


export function Button(props: ButtonProps) {
     const [counter, setCounter] = useState(1)

     function increment() {
         setCounter(p => p + 1)
     }

     return(
         <button type="button" style={{background: props.color}} onClick={increment} >
             {props.children} || <strong>{counter}</strong>
         </button>
     )
}
