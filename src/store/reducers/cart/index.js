const initialState = {
  isLoading: false,
  totalPrice: 0,
  subTotalPrice: 0,
  totalDiscount: 0,
  discountPrecentage: 0,
  items: [],
  addedItems: []
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      let newItem;
      let existedItem = state.items.find(item => item.id === action.payload.id);
      let subTotalPrice = 0;
      let totalDiscount = 0;
      let discountPrecentage = 0;
      let qtyAndTotalPrice = {};

      if (existedItem) {
        newItem = state.items.map(item => {
          if (item.id === existedItem.id) {
            if (item.sale_price !== '') {
              return {
                ...item,
                currentPrice: parseInt(action.payload.sale_price),
                qty: item.qty + 1,
                totalPrice: parseInt(item.currentPrice) * (item.qty + 1)
              };
            } else {
              return {
                ...item,
                currentPrice: parseInt(action.payload.regular_price),
                qty: item.qty + 1,
                totalPrice: parseInt(item.currentPrice) * (item.qty + 1)
              };
            }
          } else {
            return item;
          }
        });
      } else {
        if (action.payload.sale_price !== '') {
          qtyAndTotalPrice = {
            ...action.payload,
            currentPrice: parseInt(action.payload.sale_price),
            qty: 1,
            totalPrice: parseInt(action.payload.sale_price)
          };
        } else {
          qtyAndTotalPrice = {
            ...action.payload,
            currentPrice: parseInt(action.payload.regular_price),
            qty: 1,
            totalPrice: parseInt(action.payload.regular_price)
          };
        }
        newItem = [...state.items, qtyAndTotalPrice];
      }

      newItem &&
        newItem.map(item => {
          if (item.sale_price !== '') {
            subTotalPrice += item.currentPrice * item.qty;
            totalDiscount += item.regular_price - item.sale_price;
            discountPrecentage += (
              ((item.regular_price - item.sale_price) / item.regular_price) *
              100
            ).toFixed(2);

            return {
              subTotalPrice,
              totalDiscount,
              discountPrecentage
            };
          }
          subTotalPrice += item.currentPrice * item.qty;

          return subTotalPrice;
        });

      localStorage.setItem('cart_items', JSON.stringify(newItem));

      return {
        ...state,
        items: newItem,
        subTotalPrice: subTotalPrice,
        totalDiscount: totalDiscount,
        discountPrecentage: discountPrecentage
      };
    }

    case 'DISTRACT_ITEM': {
      let newItem;
      let subTotalPrice = 0;
      let totalDiscount = 0;
      let discountPrecentage = 0;
      let existedItem = state.items.find(item => item.id === action.payload.id);

      if (existedItem) {
        if (existedItem.qty === 1) {
          newItem = state.items.filter(item => item.id !== action.payload.id);
        } else {
          newItem = state.items.map(item => {
            if (item.id === existedItem.id) {
              return {
                ...item,
                qty: item.qty - 1,
                totalPrice: parseInt(item.currentPrice) * (item.qty - 1)
              };
            } else {
              return item;
            }
          });
        }
      }
      newItem &&
        newItem.map(item => {
          if (item.sale_price !== '') {
            subTotalPrice += item.currentPrice * item.qty;
            totalDiscount += item.regular_price - item.sale_price;
            discountPrecentage += (
              ((item.regular_price - item.sale_price) / item.regular_price) *
              100
            ).toFixed(2);
            return {
              subTotalPrice,
              totalDiscount,
              discountPrecentage
            };
          }
          subTotalPrice += item.currentPrice * item.qty;
          return subTotalPrice;
        });
      localStorage.setItem('cart_items', JSON.stringify(newItem));

      return {
        ...state,
        items: newItem,
        subTotalPrice: subTotalPrice,
        totalDiscount: totalDiscount,
        discountPrecentage: discountPrecentage
      };
    }
    case 'RESTORE_ITEM': {
      const { payload } = action;
      let subTotalPrice = 0;
      payload &&
        payload.map(item => {
          subTotalPrice += item.currentPrice * item.qty;
          return subTotalPrice;
        });

      return {
        ...state,
        items: action.payload,
        subTotalPrice: subTotalPrice
      };
    }
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: action.payload
      };
    case 'UPDATE_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: action.payload
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    case 'SET_DEFAULT_CART_STATE':
      return {
        ...state,
        isLoading: false,
        totalPrice: 0,
        subTotalPrice: 0,
        totalDiscount: 0,
        discountPrecentage: 0,
        items: [],
        addedItems: []
      };
    default:
      return state;
  }
};

export default cartReducers;
