export const basketReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...state, { ...action.payload, qty: 1 }];
      }

    case "REMOVE_FROM_BASKET":
      const newArr = state.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
      return newArr.filter((item) => item.qty > 0);

    default:
      return state;
  }
};

export const initialState = [];
