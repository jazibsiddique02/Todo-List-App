import TodoItem from "./TodoItem";
import { useState } from 'react';

function AddTodo({ OnNewItem }) {
    const [todoVal, settodoVal] = useState("");

    const [dateVal, setdateVal] = useState("");


    const HandleTodoName = (event) => {
        settodoVal(event.target.value)
    }

    const HandleTodoDate = (event) => {
        setdateVal(event.target.value)
    }


    function HandleAddButton() {
        OnNewItem(todoVal, dateVal)
        settodoVal("")
        setdateVal("")
    }

    return <div className="container text-center">
        <div className='row kg-row'>
            <div className="col-6">
                <input type="text" onChange={HandleTodoName} value={todoVal} placeholder="Enter Todo Here" />
            </div>
            <div className="col-4">
                <input type="date" value={dateVal} onChange={HandleTodoDate} />
            </div>
            <div className="col-2">
                <button className='btn btn-success w-50' onClick={HandleAddButton}>Add</button>
            </div>
        </div>
    </div>
}

export default AddTodo;