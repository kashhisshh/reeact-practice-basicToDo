import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent form from reloading the page
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      setTodo(''); // Clear input field after submission
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          Add todo:
          <input
            placeholder="Add todo Item"
            type="text"
            value={todo}
            onChange={handleChange}
          />
        </label>
        <button type="submit">ADD</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
