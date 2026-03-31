import React from 'react';
import TodoItem from './TodoItem';

function TodoList({
  tasks,
  onDeleteTask,
  onToggleComplete,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  editingId,
  editValue,
  setEditValue,
}) {
  // Separate completed and pending tasks
  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="todo-list-container">
      {/* Pending Tasks */}
      {pendingTasks.length > 0 && (
        <section className="task-section">
          <h2 className="section-title">Pending Tasks</h2>
          <ul className="todo-list">
            {pendingTasks.map((task) => (
              <li key={task.id}>
                <TodoItem
                  task={task}
                  onDelete={onDeleteTask}
                  onToggleComplete={onToggleComplete}
                  onStartEdit={onStartEdit}
                  onSaveEdit={onSaveEdit}
                  onCancelEdit={onCancelEdit}
                  isEditing={editingId === task.id}
                  editValue={editValue}
                  setEditValue={setEditValue}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <section className="task-section completed-section">
          <h2 className="section-title">Completed Tasks</h2>
          <ul className="todo-list">
            {completedTasks.map((task) => (
              <li key={task.id}>
                <TodoItem
                  task={task}
                  onDelete={onDeleteTask}
                  onToggleComplete={onToggleComplete}
                  onStartEdit={onStartEdit}
                  onSaveEdit={onSaveEdit}
                  onCancelEdit={onCancelEdit}
                  isEditing={editingId === task.id}
                  editValue={editValue}
                  setEditValue={setEditValue}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default TodoList;