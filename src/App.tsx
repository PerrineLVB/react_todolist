import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>to-do list</h1>
      < TaskList />
    </div>
  );
}

export default App;
