import { ADD_ITEM } from "../actionTypes";

const initialState = {
  allItems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const content = action.payload;
      if (!state.allItems.includes(content)){
        return {
            ...state,
            allItems: [...state.allItems, content]
          };
      }
      else{
        return state;
      }
    }
    default:
      return state;
  }
}
