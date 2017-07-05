// ------------------------------------
// Constants
// ------------------------------------
export const CURRENCIES_GET = 'CURRENCIES_GET'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const getCurrencies = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
        dispatch({
          type    : CURRENCIES_GET,
          payload : [1, 2, 3]
        });
        resolve();
    })
  }
}

export const actions = {
  getCurrencies
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CURRENCIES_GET]: (state, action) => { return { ...state, currencies: action.payload } }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    currencies: [],
};
export default function currenciesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
