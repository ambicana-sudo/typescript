import React from 'react';
import './App.css';
import Users from './pages/users/users';
import TodoTask from './pages/todoTask/todotask';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoTask/>
      <Users/>
    </div>
  )
}

export default App;
