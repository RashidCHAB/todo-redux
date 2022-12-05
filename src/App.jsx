import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '.';
import { TodoList } from './TodoList';
import Task from './Task';

function App() {
  const [text, setText] = useState("")
  const state = useSelector((initialState) => initialState)
  const dispatch = useDispatch()

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault()

    dispatch(add({ text: text, completed: false, id: Date.now() }))
  }

  return (
    <div className="App">
      <form onSubmit={handleAdd}>
        <input type="text" value={text} onChange={handleText} />
        <button onClick={handleAdd}>+</button>
      </form>
      {state.todos.map((task, index) => <Task task={task} index={index} />)}
    </div>
  );
}

export default App;
