import React, { useState } from 'react';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { name: 'Go to gym', priority: 'High', status: 'To Do' },
    { name: 'Read a book', priority: 'Low', status: 'Done' },
    { name: 'Go to market', priority: 'Medium', status: 'In Progress' },
  ]);

  const addTask = () => {
    const name = prompt('Enter task name');
    const priority = prompt('Enter task priority (High, Medium, Low)');
    const status = prompt('Enter task status (To Do, In Progress, Done)');
    if (name && priority && status) {
      setTasks([...tasks, { name, priority, status }]);
    }
  };

  const editTask = (index) => {
    const task = tasks[index];
    const name = prompt('Edit task name', task.name);
    const priority = prompt('Edit task priority (High, Medium, Low)', task.priority);
    const status = prompt('Edit task status (To Do, In Progress, Done)', task.status);
    if (name && priority && status) {
      const updatedTasks = tasks.map((t, i) =>
        i === index ? { ...t, name, priority, status } : t
      );
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (index) => {
    console.log("Deleting task at index:", index); // Debugging
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      <button className="add-task-button" onClick={addTask}>+ Add Task</button>
      <div id="task-list">
        {tasks.map((task, index) => (
          <div className="task-item" key={index}>
            <div className="task-details">
              <div>{task.name}</div>
              <div className="task-priority-wrapper">
                <span className="priority-label">Priority:</span>
                <span className={`task-priority task-priority-${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span>
              </div>
            </div>
            <span className={`status-badge status-${task.status.toLowerCase().replace(' ', '-')}`}>
              {task.status}
            </span>
            <div className="task-actions">
              <button className="edit" onClick={() => editTask(index)}>&#9998;</button>
              <button className="delete" onClick={() => deleteTask(index)}>&#128465;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
