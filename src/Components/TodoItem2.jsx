function TodoItem2() {

    let TodoName = 'Play Tennis';
    let TodoDate = '5/10/2023';
    return <div class="container text-center">
        <div class='row kg-row'>
            <div class="col-6">
                {TodoName}
            </div>
            <div class="col-4">
                {TodoDate}
            </div>
            <div class="col-2">
                <button class='btn btn-danger w-50'>Delete</button>
            </div>
        </div>

    </div>

}


export default TodoItem2;