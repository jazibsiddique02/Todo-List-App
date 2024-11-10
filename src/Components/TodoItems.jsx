import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteCLick }) {
    return (
        <div className="items-container">
            {todoItems.map((item) =>
            (<TodoItem key={item.name} TodoName={item.name} onDeleteCLick={onDeleteCLick} TodoDate={item.dueDate} />
            ))}
        </div>
    );
}

export default TodoItems;