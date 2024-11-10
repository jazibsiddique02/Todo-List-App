import { useState } from 'react';
import './App.css';
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from './Components/TodoItems';
import WelcomMessage from './Components/WelcomMessage';


function App() {



  const [todoitems, settodoItems] = useState([]);


  function HandleNewItem(todoName, todoDate) {
    let newTodoArray = [...todoitems, {
      name: todoName,
      dueDate: todoDate
    }]

    settodoItems(newTodoArray)
  }


  const HandleDelete = (todoName) => {
    console.log("Item Deleted: " + todoName)
    let NewTodoItems = todoitems.filter(item => item.name !== todoName)
    settodoItems(NewTodoItems)
  }





  return <center className='todo-container'>
    <AppName />
    <AddTodo OnNewItem={HandleNewItem} />
    {todoitems.length === 0 && <WelcomMessage />}
    <TodoItems onDeleteCLick={HandleDelete} todoItems={todoitems} />


  </center>
}

export default App;
