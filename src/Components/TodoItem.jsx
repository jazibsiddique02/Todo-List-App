function TodoItem({ TodoName, TodoDate }) {
    return <div className="container text-center">
        <div className='row kg-row'>
            <div className="col-6">
                {TodoName}
            </div>
            <div className="col-4">
                {TodoDate}
            </div>
            <div className="col-2">
                <button className='btn btn-danger w-50'>Delete</button>
            </div>
        </div>
    </div>
}

export default TodoItem;