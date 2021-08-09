import { stringify } from 'querystring';
import React from 'react';
import { useState } from 'react'
import Header from './Header'
import Todo from './Todo'
import footer from './footer'

function App() {
  const[todos,setTodos]=useState([]);
  const[todo,setTodo]=useState("")
  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    /* check pressing enter key here */  
    setTodo(ev.key)
    console.log(ev.key)
   }
  return (
    <div>
      {/* header section */}
      <Header></Header>
      {/* <div className='flex justify-center items-end space-x-2'>
        <span className='text-center italic my-2 text-2xl'>Minimal Todo List </span>
        <span className='text-gray-400 italic my-2 text-xl'>by Metis Guntavee 630612187</span>
      </div> */}

      {/* todo section */}
      <Todo></Todo>
        {/* task input and add button */}

        {/* <div className='flex space-x-1'>
          <input className='border border-gray-400 w-full text-2xl'
            onKeyDown={onKeyDownCallback}></input>
          <button className='border border-gray-400 w-8 font-bold'>+</button>
        </div> */}

        {/* tasks section */}
        
          {/* task example */}
          {/* Please convert this into a task component */}
        
          {/* another task example */}
      
      {/* footer section */}
    <footer></footer>
    </div>
  );
}

export default App;
