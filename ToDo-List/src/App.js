import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction, UpdateTodoAction } from './action/TodoAction'
import './App.css';

function App() {
  //local state of the component
  const [todo, setTodo] = useState();
const [updateTodo,setUpdateTodo]= useState("");
 const [update,setUpdate] =useState({update: false,id: ''});
  // to action to store/to call your action 
  const dispatch = useDispatch();
  // to access our state we useSelector
  const Todo = useSelector((state) => state.Todo);
  //
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    //console.log(t)
    dispatch(RemoveTodoAction(t.todo));
  };

  const saveHandler= (t) =>{
    
    dispatch(UpdateTodoAction(t,updateTodo));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List APP</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="enter a Todo" style={{
            width: 400,
            padding: 10,
            borderRadius: 20,
            border: "none",
            fontSize: 20,
          }}
          //changing the input box
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type='submit' style={{
            padding: 12,
            borderRadius: 25,
            color: "Red",
            fontSize: 15,
            marginLeft: 20,
          }}>Add</button>
          
        </form>
        <ul className='allTodos'>
          
          {
           
            todos && todos.map((y) => (
              <li key={y.id} className='singleTodo'>
                
                {
                update.update && update.id === y.id ? (
                  <>
                 
                  <input type="text" 
                  placeholder={y.todo}
                  onChange={(e)=>setUpdateTodo(e.target.value)} />

                  <button style={{
                                padding: 12,
                                borderRadius: 25,
                                fontSize: 15,
                                marginLeft: 20,
                              }}
                        onClick={() => saveHandler(y)}>Save
                  </button>
                  <button style={{
                    padding: 12,
                    borderRadius: 25,
                    fontSize: 15,
                    marginLeft: 20,
                  }}
                  onClick={() => setUpdate({update: false, id: y.id})}>
                  Cancel</button>
                  </>

                ):(
                  <>
                  <span className='todoTextr'>{y.todo}</span>
                  <button style={{
                    padding: 12,
                    borderRadius: 25,
                    fontSize: 15,
                    marginLeft: 20,
                  }}
                  onClick={() => setUpdate({update: true, id: y.id})}>
                  Update</button>
                  <button style={{
                    padding: 12,
                    borderRadius: 25,
                    fontSize: 15,
                    marginLeft: 20,
                  }}
                    onClick={() => removeHandler(y)}
                  >Delete</button>
                  </>
                )
                }
                
                
                
              </li>
            ))}
        </ul>
      </header>
    </div>
  )
}

export default App;