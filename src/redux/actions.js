import { ADD_ITEM } from "./actionTypes";

let nextTodoId = 0;

export const addItem = content => ({
  type: ADD_ITEM,
  payload: {
    id: ++nextTodoId,
    content
  }
});
