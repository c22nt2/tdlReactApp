import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './components/ClassComponent';
import * as DM from './components/FuncComponent';
import Parent from './components/ClassParent';
import Sample from './components/Sample';
import ToDoList from './components/ToDoList';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faEdit, faPlus);

function App() {
  return (
    <div className="App">
      <h1>App Components</h1>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
