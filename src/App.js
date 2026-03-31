import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Add a new task
  const addTask = (taskTitle) => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
      createdAt: new Date().toLocaleDateString(),
    };
    setTasks([newTask, ...tasks]);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Start editing a task
  const startEdit = (id, title) => {
    setEditingId(id);
    setEditValue(title);
  };

  // Save edited task
  const saveEdit = (id) => {
    if (editValue.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, title: editValue } : task
        )
      );
      setEditingId(null);
      setEditValue('');
    }
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  // Calculate statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Task Manager</h1>
        <p className="subtitle">Organize your daily activities efficiently</p>
      </header>

      <main className="app-main">
        {/* Statistics Dashboard */}
        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-label">Total Tasks</span>
            <span className="stat-value">{totalTasks}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Completed</span>
            <span className="stat-value">{completedTasks}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Pending</span>
            <span className="stat-value">{pendingTasks}</span>
          </div>
        </div>

        {/* Task Form */}
        <TodoForm onAddTask={addTask} />

        {/* Task List */}
        <TodoList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleComplete={toggleComplete}
          onStartEdit={startEdit}
          onSaveEdit={saveEdit}
          onCancelEdit={cancelEdit}
          editingId={editingId}
          editValue={editValue}
          setEditValue={setEditValue}
        />

        {/* Empty State */}
        {tasks.length === 0 && (
          <div className="empty-state">
            <p>No tasks yet. Add one to get started!</p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;