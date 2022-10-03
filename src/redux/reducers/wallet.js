import { INICIAL_REQ, PEGA_API, PEGA_GASTOS } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],

};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case INICIAL_REQ:
    return state;
  case PEGA_API:
    return {
      ...state,
      currencies: action.payload,
    };
  case PEGA_GASTOS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
