import { useState } from 'react';
import Header from './Header';
import './App.css';
import CounterApp from '../useState/CounterApp';
import Greeting from '../useState/greeting';
import Todo from '../useState/Todo';
import Logger from '../useEffect/Logger';
import Timer from '../useEffect/Timer';
import Loader from '../useEffect/Loader';

function App() {
  

  return (
    <>
      {/* <Todo />
      <CounterApp />
      <Greeting />
      <h2>Welcome to my app</h2> 
      <Logger />
      */}
    {/* <Timer /> */}
    <Loader />
    </>
  );
}

export default App; 
