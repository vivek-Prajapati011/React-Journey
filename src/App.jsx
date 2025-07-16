import { useState } from 'react';
import Header from './Header';
import './App.css';
import CounterApp from '../useState/CounterApp';
import Greeting from '../useState/greeting';

function App() {
  

  return (
    <>
      <CounterApp />
      <Greeting />
      <h2>Welcome to my app</h2>
    </>
  );
}

export default App; 
