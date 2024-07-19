import React, { useState } from 'react';
import './App.css';

function App() {
  const [lists, setLists] = useState({
    study: [],
    mentalHealth: [],
    physicalHealth: []
  });
  
<div className="lists">
    <div className="list">
      <h2>Study/Work Tasks</h2>
      <ul>
        {lists.study.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask('study', index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add task"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            handleAddTask('study', e.target.value.trim());
            e.target.value = '';
          }
        }}
      />
    </div>
    <div className="list">
      <h2>Mental Health Tasks</h2>
      <ul>
        {lists.mentalHealth.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask('mentalHealth', index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add task"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            handleAddTask('mentalHealth', e.target.value.trim());
            e.target.value = '';
          }
        }}
      />
    </div>
    <div className="list">
      <h2>Physical Health Tasks</h2>
      <ul>
        {lists.physicalHealth.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask('physicalHealth', index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add task"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            handleAddTask('physicalHealth', e.target.value.trim());
            e.target.value = '';
          }
        }}
      />
    </div>
    
  </div>