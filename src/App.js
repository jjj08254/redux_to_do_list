import React from 'react';
import Header from './components/Header';
import InputSection from './components/InputSection';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <Header />
      <br />
      <InputSection />
      <br />
      <TodoList />
    </div>
  );
}

export default App;
