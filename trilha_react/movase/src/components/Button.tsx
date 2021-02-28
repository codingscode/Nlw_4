import React from 'react'

interface ButtonProps {
    color: string
}

export function Button(props: ButtonProps) {

     return(
         <button type="button" style={{background: props.color, color: 'white'}} >
             Botão <strong>Teste</strong>
         </button>
     )
}
