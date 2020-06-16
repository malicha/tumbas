export function addItem(payload, newQty) {
  return dispatch => {
    dispatch({ type: 'ADD_ITEM', payload, newQty });
  };
}

export function distractItem(payload) {
  return dispatch => {
    dispatch({ type: 'DISTRACT_ITEM', payload });
  };
}

export function restoreItems(payload) {
  return dispacth => {
    dispacth({ type: 'RESTORE_ITEM', payload });
  };
}

export function updateTotalPrice(payload) {
  return dispatch => {
    dispatch({ type: 'UPDATE_TOTAL_PRICE', payload });
  };
}

export function cartStateSetDefault() {
  return dispatch => {
    dispatch({ type: 'SET_DEFAULT_CART_STATE' });
  };
}

export function updateItem(data, itemIndex) {
  return (dispatch, getState) => {
    const { items } = getState().cart;
    const payload =
      items &&
      items.map((item, idx) => {
        if (idx === itemIndex) {
          return {
            ...item,
            count: data,
            totalPriceItem: item.price * data
          };
        }
        return item;
      });
    let sumPrice = 0;
    payload &&
      payload.map(item => {
        sumPrice += item.totalPriceItem;

        return sumPrice;
      });

    dispatch({ type: 'UPDATE_ITEM', payload });
    dispatch({ type: 'UPDATE_TOTAL_PRICE', payload: sumPrice });
  };
}
