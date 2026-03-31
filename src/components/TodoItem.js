import React from 'react';

function TodoItem({
  task,
  onDelete,
  onToggleComplete,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  isEditing,
  editValue,
  setEditValue,
}) {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className="item-content">
        <input
          type="checkbox"
          className="item-checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          aria-label="Mark task as complete"
        />

        {isEditing ? (
          <div className="edit-mode">
            <input
              type="text"
              className="edit-input"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              autoFocus
            />
            <div className="edit-actions">
              <button
                className="btn btn-save"
                onClick={() => onSaveEdit(task.id)}
              >
                Save
              </button>
              <button className="btn btn-cancel" onClick={onCancelEdit}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="view-mode">
            <span className="item-title">{task.title}</span>
            <span className="item-date">{task.createdAt}</span>
          </div>
        )}
      </div>

      {!isEditing && (
        <div className="item-actions">
          <button
            className="btn btn-edit"
            onClick={() => onStartEdit(task.id, task.title)}
            aria-label="Edit task"
          >
            ✎
          </button>
          <button
            className="btn btn-delete"
            onClick={() => onDelete(task.id)}
            aria-label="Delete task"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;