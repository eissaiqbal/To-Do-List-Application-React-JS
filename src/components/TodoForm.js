import React, { useState } from 'react';

function TodoForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue('');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="task-input"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={handleChange}
          maxLength="100"
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
      <p className="form-hint">Press Enter or click Add Task to add a new task</p>
    </form>
  );
}

export default TodoForm;