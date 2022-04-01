import {
  ADD_TODO,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoType";

const initialState = {
  counter: 1,
  list: [
    {
      id: 1,
      text: "Work hard!",
      completed: false,
    },
  ],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1,
        list: [
          ...state.list,
          { id: state.counter + 1, text: action.payload, completed: false },
        ],
      };
    case CLEAR_TODO_LIST:
      return {
        counter: 0,
        list: [],
      };
    case TOGGLE_TODO:
      return {
        counter: state.counter,
        list: [
          ...state.list.map((item) =>
            item.id === action.payload
              ? { ...item, completed: !item.completed }
              : item
          ),
        ],
      };

    case DELETE_TODO:
      return {
        counter: state.counter,
        list: [...state.list.filter((item) => item.id !== action.payload)],
      };

    default:
      return state;
  }
};

export default todoReducer;
