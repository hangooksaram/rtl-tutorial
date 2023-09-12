import Profile from "./components/Profile";
import TodoForm from "./components/todo/TodoForm";

function App() {
  const onInsert = (value) => {
    console.log(value);
  };
  return (
    <div className="App">
      <Profile username="hj" name="오현재" />;
      <TodoForm onInsert={onInsert} />
    </div>
  );
}

export default App;
