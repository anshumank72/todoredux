import { HANDLE_INPUT, ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./actionTypes";
export const handleInput = (payload) => {
  return {
    types: HANDLE_INPUT,
    payload,
  };
};

export const addItem = (message) => {
  return {
    type: ADD_ITEM,
    message,
    id: Math.random(),
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id,
  };
};
