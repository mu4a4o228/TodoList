import React, { useState } from "react";
import styles from "./Home.module.css"
import { CiSquarePlus } from "react-icons/ci";


const CreateTodoField = ({setTodos,todos}) => {

    const [title, setTitle] = useState('')

    const addTodo = title => {
      
     
       setTodos(prev =>[{
          _id: new Date(),
          title,
          isCompleted: false,
        },...prev,])
        setTitle('')
      }
     console.log(todos);
     
     
    //  if(addTodo > 5) {
    //   removeTodo(todo._id)
    //  } else {
    //   addTodo
    //  }               Сделать лимит на добавления туду задач

    return (
        <div className={styles.ContaineraddNewTodo}>
          
          
       <textarea
        className={styles.addNewTodo}
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        placeholder="Add todo..."
        disabled = {todos.length >= 5}>
        </textarea>

        <button 
        disabled = {todos.length >= 5} 
        className = {styles.addBtn} 
        onClick={() => addTodo(title)}><CiSquarePlus size={23}/>
        </button>  
        
        </div>
    )
}

export default CreateTodoField