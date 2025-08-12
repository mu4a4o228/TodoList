import { useState } from 'react'
import styles from './Home.module.css'
import TodoItem from './TodoItem'
import CreateTodoField from './Create-Todo-Field'


function App() {
    
  const data = [{
    _id: 'wqeqw21',
    title: "Задание на день...2",
    isCompleted: false,
  },
  
  {
    _id: 'asdasw',
    title: "Задание на день...1",
    isCompleted: false,
  },


]

    const [todos, setTodos] = useState(data)    

     const changeTodo = id => {
      const copy = [...todos]
      const current = copy.find(t => t._id === id)
      current.isCompleted = !current.isCompleted
      setTodos(copy)
      
    }
    
     const removeTodo = id => 
      setTodos([...todos].filter(t => t._id !== id))
     
     const updateTodo = (id, newTitle) => {
      setTodos(prev => 
        prev.map(todo =>
          todo._id === id ? {...todo, title: newTitle} : todo
        )
      )
     }

   

  return (

   

     <div className={styles.headerH}>
        
     <div className={styles.lessons}>{todos.map(todo => (
      <TodoItem  key = {todo._id} 
      todo = {todo} 
      changeTodo = {changeTodo}
      removeTodo={removeTodo}
      updateTodo ={updateTodo}/> 
      ))} 
      <CreateTodoField 
      
      setTodos = {setTodos}/>
      </div> 
    
      
   
    <h1 className={styles.name}>TODOLIST</h1>
   
   
    
    
          
          
         
        
        
     
   </div>
   
  )
}




export default App
