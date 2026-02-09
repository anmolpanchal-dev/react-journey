import AppName from "./components/AppName";
function App() {
  return (
    <>
    <center className="todo-Container">
      <AppName />
      <div class="container text-center">
        <div class="row">
          <div class="col-6"><input type="text" placeholder="Enter Todo Here" /></div>
          <div class="col-4"><input type="date" name="date" /></div>
          <div class="col-2"><button type="button" class="btn btn-success">Add</button></div>
        </div>
      </div>
      <div class="container text-center">
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">Buy Milk</div>
          <div class="col-4">4/10/2023</div>
          <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">Go to College</div>
          <div class="col-4">5/10/2025</div>
          <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">Early to bed</div>
          <div class="col-4">7/11/2026</div>
          <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
        </div>
      </div>
      </center>
    </>
  );
}

export default App;
