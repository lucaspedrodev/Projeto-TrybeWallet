import { INICIAL_REQ, PEGA_API } from '../actions';

const INICIAL_STATE = {
  currencies: [],

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
  default:
    return state;
  }
};

export default wallet;
