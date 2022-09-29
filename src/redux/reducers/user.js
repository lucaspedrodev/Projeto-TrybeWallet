import { PEGA_EMAIL } from '../actions';

const INICIAL_STATE = {
  email: '',
};

const user = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case PEGA_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};
export default user;
