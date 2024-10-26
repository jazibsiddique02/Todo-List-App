function App() {
  return <center class='todo-container'>
    <h1>TODO App</h1>
    <div class="container text-center">
      <div class='row'>
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button class='btn btn-success w-50'>Add</button>
        </div>
      </div>

      <div class='row'>
        <div class="col-6">
          Buy Milk
        </div>
        <div class="col-4">
          4/10/2023
        </div>
        <div class="col-2">
          <button class='btn btn-danger w-50'>Delete</button>
        </div>
      </div>


      <div class='row'>
        <div class="col-6">
          Play Tennis
        </div>
        <div class="col-4">
          5/10/2023
        </div>
        <div class="col-2">
          <button class='btn btn-danger w-50'>Delete</button>
        </div>
      </div>

    </div>
  </center>



}

export default App
