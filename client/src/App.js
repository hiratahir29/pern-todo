import { ToastContainer } from 'react-toastify';
import './App.css';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodos';


function App() {
  return (
    <div className="App">
      <InputTodo/>
      <ListTodo/>
      <ToastContainer />
    </div>
  );
}

export default App;
