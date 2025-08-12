import React from "react";
import CheckBox from "./checkBox";
import styles from "./Home.module.css"
import { FaA, FaTrash } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";

const TodoItem = ({todo, changeTodo, removeTodo, updateTodo}) => {

     const [isEditing, setIsEditing] = useState(false)
    const [editValue, setEditValue] = useState(todo.title)

    const handleEdit = () => {
        if(editValue.trim() !== '') {
            updateTodo(todo._id, editValue)
        }
        setIsEditing(false)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleEdit()
        if (e.key === 'Escape') setIsEditing(false)  
    }

  
    
    return(

       <div className={styles.flex}>

        <button className={styles.backBroder} onClick = {() => !isEditing && changeTodo(todo._id) }>
         <CheckBox isCompleted={todo.isCompleted} />
           {isEditing ? (
          <input
            autoFocus
            className={styles.editInput}
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <span style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
            {todo.title}
          </span>
        )}
        </button>
        
       {!isEditing ? (
        <>
          <button className ={styles.updateBtn} onClick={() => setIsEditing(true)}>
            <FaPencilAlt size={20}/>
          </button>
          <button className={styles.clear} onClick={() => removeTodo(todo._id)}>
            <FaTrash size={20} />
          </button>
        </>
      ) : (
        <button 
        
          className={styles.saveBtn}
          onMouseDown={handleEdit} 
        >
          <GiCheckMark size={20}/>
        </button>
      )}
    </div> 
    )
    
}

export default TodoItem;