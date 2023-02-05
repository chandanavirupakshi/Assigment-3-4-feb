export const AddTodoAction = (todo) => (dispatch, getState) => {
    const {
      Todo: { todos },
    } = getState();
    const hasTodo = todos.find((i) => i.todo === todo);
  
    if (!hasTodo && todo !== "") {
      dispatch({
        type: "ADD_Todo",
        payload: [{ id: todo, todo }, ...todos],
      });
    }
  };
  
  export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
      Todo: { todos },
    } = getState();
    dispatch({
      type: "Remove_Todo",
      payload: todos.filter((t) => t.todo !== todo),
    });
  };
  
  export const UpdateTodoAction = (todoObj,todo) => (dispatch, getState) => {
      const {
          Todo: { todos },
        } = getState();
    console.log(todos);
    const updatedTodos = todos.map((p) =>
      p.id === todoObj.id ? { id: todo, todo: todo } : p
    );
    console.log('updatedTodos: '+updatedTodos);
    dispatch({
      type: "Update_Todo",
      payload: updatedTodos
    });
  };