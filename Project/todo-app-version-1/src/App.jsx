import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import './App.css';
function App() {
  return (
    <>
    <center className="todo-Container">
      <center><AppName /></center>
      <AddTodo />
      <TodoItem />
      <TodoItem />
      <TodoItem /> 
    </center>
    </>
  );
}

export default App;
