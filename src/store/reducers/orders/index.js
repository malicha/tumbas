const initialState = {
  orders: []
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ORDER':
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    default:
      return state;
  }
};
