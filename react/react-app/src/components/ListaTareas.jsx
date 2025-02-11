import React from 'react'
import { ListaItem } from './ListaItem'

export function ListaTareas({ taskList, toggleTarea }) {
  return (
    <ul>
        {taskList.map(( tarea ) => (
            <li key={tarea.id}>
                <ListaItem tarea={tarea} toggleTarea={toggleTarea}/>
            </li>
        ))}
    </ul>
  )
}
