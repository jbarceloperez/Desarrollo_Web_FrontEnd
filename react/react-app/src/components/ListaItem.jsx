import React from 'react'

export function ListaItem({ tarea, toggleTarea }) {
    const { id, texto, done } = tarea;
    const handleClick = () => {
        toggleTarea(id);
    }
    return (
    <li>
        <input type="checkbox" onChange={handleClick}/>
        {id}- {texto} {done ? '✅' : '❌'}

    </li>
  )
}
