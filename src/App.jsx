import React, { Profiler } from 'react'
import Greet from './components/Greet'
import Add from './components/Add'
import { useState } from 'react';
import Counter from './components/Counter';
import TodoList from './components/Profile';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';
import CopyInput from './components/CopyInput';
import Switcher from './components/Switcher';
import BasicEffect from './components/BasicEffect';
import CounterEffect from './components/CounterEffect';
import FetchDataEffect from './components/FetchDataEffect';
import ComponentA from './components/ComponentA';
import { createContext } from 'react';

export const Data = createContext();
export const Data1 = createContext();

const App = () => {

  const [count, setCount] = useState(0);

  console.log(count);
  const name = "Ayush"
  const Age = 23;
  return (
    <>
    { /* <Counter /> 
     <TodoList /> 

    <Profile />

    <ShoppingList />
    <CopyInput />
    <Switcher />
    
    */}
    
    <Data.Provider value={name}>
      <Data1.Provider value={Age}>
        <ComponentA />
      </Data1.Provider>
    </Data.Provider>
    </>
  )
}

export default App