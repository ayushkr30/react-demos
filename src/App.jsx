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



const App = () => {

  const [count, setCount] = useState(0);

  console.log(count);
  return (
    <>
    <Counter /> 
     <TodoList /> 

    <Profile />

    <ShoppingList />
    <CopyInput />
    <Switcher />
    
   
    </>
  )
}

export default App