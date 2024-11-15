import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const AddTaskForm = ({ onAdd, onClose }) => {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('To Do');

  const handleAddTask = () => {
    if (name && priority && status) {
      onAdd({ name, priority, status });
      onClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Task</h2>
        <label>
          Task
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter task name"
          />
        </label>
        <label>
          Priority
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <label>
          Status
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <button onClick={onClose}>Close</button>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleSubmit}>
          {taskToEdit ? 'Update Task' : 'Add Task'}
        </Button>
      </Modal.Footer>

export default TaskForm;
