import './App.css';
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from './Components/TodoItems';


function App() {

  const todoItems = [
    {
      name: 'Buy Milk',
      dueDate: '4/10/2023'
    },
    {
      name: 'Play Tennis',
      dueDate: '8/10/2023'
    },
    {
      name: 'Eat Food',
      dueDate: '14/10/2023'
    }];


  return <center className='todo-container'>
    <AppName />
    <AddTodo />
    <TodoItems todoItems={todoItems} />
    {/* <div className="items-container">
      <TodoItem TodoName="Buy Milk" TodoDate="4/10/2023" />
      <TodoItem TodoName="Play Tennis" TodoDate="8/10/2023" />
    </div> */}

  </center>
}

export default App;
