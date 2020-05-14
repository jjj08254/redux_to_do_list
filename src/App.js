import React from 'react';
import Header from './components/Header';
import InputSection from './components/InputSection';
import DisplayTodoList from './components/DisplayTodoList';

function App() {
  return (
    <div className="container">
      <Header />
      <br />
      <InputSection />
      <br />
      <DisplayTodoList />
    </div>
  );
}

export default App;
