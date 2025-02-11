import { Fragment, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import {ListaTareas} from './components/ListaTareas';

function App() {
  const [taskList, setTaskList] = useState([
    {id: 1, texto: 'Tarea 1', done: false},
    {id: 2, texto: 'Tarea 2', done: false},
  ]);

  const toggleTarea = (id) => {
    const newTaskList = [...taskList];
    const tarea = newTaskList.find((tarea) => tarea.id === id);
    tarea.done = !tarea.done;
    setTaskList(newTaskList);
  }

  const tareaRef = useRef();

  const addTarea = () => {
    const tarea = tareaRef.current.value;
    if (tarea === '') return;

    // setTaskList((prevTaskList) => {
    //   return [
    //     ...prevTaskList,
    //     {id: prevTaskList.length + 1, texto: tarea, done: false}
    //   ];
    // });
    setTaskList([
      ...taskList,
      {id: taskList.length + 1, texto: tarea, done: false}
    ]);
    tareaRef.current.value = '';
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Fragment>
      <h2> Lista de tareas</h2>
      <ListaTareas taskList={taskList} toggleTarea={toggleTarea}/>
      <input ref={tareaRef} type="text" placeholder='Nueva Tarea'/>
      <button onClick={addTarea}>➕</button>
      <p> {taskList.filter((tarea) => !tarea.done).length} tareas por terminar</p>
    </Fragment>
  );
}

export default App;
