import { ADD_ITEM, DELETE_ITEM } from "./actionTypes";

const initState = {
  items: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          {
            message: action.message,
            id: action.id,
          },
        ],
      };
    case DELETE_ITEM:
      let todos = state.items.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        items: todos,
      };

    default:
      return state;
  }
};
export default reducer;
