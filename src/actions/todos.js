export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

export const addTodoHandler = (name, cb) => {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo));
        cb();
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };
};
export const removeTodoHandler = (item) => {
  return (dispatch) => {
    dispatch(removeTodo(item.id));
    return API.deleteTodo(item.id).catch(() => {
      this.props.store.dispatch(addTodo(item));
      alert("Error");
    });
  };
};
export const toggleTodoHandler = (id) => {
  return (dispatch) => {
    dispatch(toggleTodo(id));
    return API.saveTodoToggle(id).catch(() => {
      dispatch(toggleTodo(id));
      alert("Error");
    });
  };
};
