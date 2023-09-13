import Profile from "./components/Profile";
import TodoApp from "./components/todo/TodoApp";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";

function App() {
  const onInsert = (value) => {
    console.log(value);
  };
  return (
    <div className="App">
      <TodoApp />;
    </div>
  );
}

export default App;
