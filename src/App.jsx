import { useState } from 'react';
import Header from './Header';
import './App.css';
import CounterApp from '../useState/CounterApp';
import Greeting from '../useState/greeting';
import Todo from '../useState/Todo';
import Logger from '../useEffect/Logger';
import Timer from '../useEffect/Timer';
import Loader from '../useEffect/Loader';
import UseInfo from '../useEffect/UserInfo';
import MovieManager from '../Lift-state-up/MovieManager';

function App() {
  

  return (
    <>
      {/* <Todo />
      <CounterApp />
      <Greeting />
      <h2>Welcome to my app</h2> 
      <Logger />
      */}
    { 
    /* <Timer />
     <Loader />  
     <UseInfo /> 
     <UseInfo />
     */}
     <MovieManager />
    
   
    </>
  );
}

export default App; 
