import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
    return (
        <div className="items-container">
            {todoItems.map((item) =>
            (<TodoItem key={item.name} TodoName={item.name} TodoDate={item.dueDate} />
            ))}
        </div>
    );
}

export default TodoItems;