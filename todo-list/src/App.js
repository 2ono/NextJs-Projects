import Todo from "./components/Todo.js";
import Modal from "./components/Modal.js";
import Backdrop from "./components/Backdrop.js";

function App() {
  return (
    <div>
      <h1>My TodoList</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="todo text" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
