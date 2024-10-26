function AddTodo() {
    return <div className="container text-center">
        <div className='row kg-row'>
            <div className="col-6">
                <input type="text" placeholder="Enter Todo Here" />
            </div>
            <div className="col-4">
                <input type="date" />
            </div>
            <div className="col-2">
                <button className='btn btn-success w-50'>Add</button>
            </div>
        </div>
    </div>
}

export default AddTodo;