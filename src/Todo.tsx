import Task from './Task'
import { useState } from 'react'

type TaskData = {
    id: number;
    name: string;
  }

const Todo = () => {
    const [input, setinput] = useState<string>('')
    const [tasks , setTasks] = useState<TaskData[]>([])
    const [donetasks , setdonetasks] = useState<TaskData[]>([])
    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        /* check pressing enter key here */
        if(ev.key === "Enter") addtask()

    }
    const DoneFunc = (Id: number) =>{
        let newid : number = 0
        let taskName : string = ''
        const newtask = tasks.filter(x => {
            if (x.id === Id){
                newid = x.id
                taskName = x.name
            }
            return x.id !== Id
        })
        const newdonetask = [{id: newid, name: taskName},...donetasks]
        setTasks(newtask)
        setdonetasks(newdonetask)
        }
    const DeleteFunc = (id: number) =>{
        const newTasks = tasks.filter(x => x.id !== id)
        setTasks(newTasks)
        }
    
    const addtask = () => { 
        if(input !== "")
        { 
        const Id = (new Date()).getTime()
        const setnewtasks = [{id: Id, name: input},...tasks]
        document.querySelectorAll('input')[0].value = '' 
        setTasks(setnewtasks)
        setinput('')
    } else {
        alert("Task cannot be empty")
        setinput('')
    }
       
        
    }
    return <div className='mx-auto max-w-4xl'>

        {/* task input and add button */}
        <div className='flex space-x-1'>
            <input onChange={event => setinput(event.target.value)} className='border border-gray-400 w-full text-2xl'
                onKeyDown={onKeyDownCallback} type="text" name="todo" placeholder="Fill Something" ></input>
            <button className='border border-gray-400 w-8 font-bold' onClick={addtask} >+</button>
            
        </div>
        {tasks.map( x => <Task id={x.id} name={x.name} deleteFn={DeleteFunc} doneFn={DoneFunc} status ={'not Done'}/>)}
        {donetasks.map( x => <Task id={x.id} name={x.name} deleteFn={DeleteFunc} doneFn={DoneFunc} status ={'Done'}/>)}
        </div>

}


export default Todo