export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CHANGE_TODO = "CHANGE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  payload: todoId,
});

export const editTodo = (todoId) => ({
  type: EDIT_TODO,
  payload: todoId,
});

export const toggleTodo = (todoId) => ({
  type: TOGGLE_TODO,
  payload: todoId,
});

export const changeTodo = (todoId, todo) => ({
  type: CHANGE_TODO,
  payload: {
    todoId,
    todo,
  },
});
