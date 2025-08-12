import React, { useState } from "react";
import styles from "./Home.module.css"
import { CiSquarePlus } from "react-icons/ci";


const CreateTodoField = ({setTodos}) => {

    const [title, setTitle] = useState('')

       const addTodo = title => {
      setTodos(prev =>[{
        _id: new Date(),
        title,
        isCompleted: false,
      },...prev,])
      setTitle('')
     }
     
    //  if(addTodo > 5) {
    //   removeTodo(todo._id)
    //  } else {
    //   addTodo
    //  }               Сделать лимит на добавления туду задач

    return (
        <div className={styles.ContaineraddNewTodo}>
          
          
       <input 
        className={styles.addNewTodo}
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        placeholder="Add todo..."
        
        />

        <button  
        className = {styles.addBtn} 
        onClick={() => addTodo(title)}><CiSquarePlus size={23}/>
        </button>  
        
        </div>
    )
}

export default CreateTodoField