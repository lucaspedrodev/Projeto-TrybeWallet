export const PEGA_EMAIL = 'PEGA_EMAIL';
export const INICIAL_REQ = 'INICIAL_REQ';
export const PEGA_API = 'PEGA_API';
export const PEGA_GASTOS = 'PEGA_GASTOS';

export const pegaEmail = (payload) => ({
  type: PEGA_EMAIL,
  payload,
});

const inicialRequest = () => ({ type: INICIAL_REQ });
const respostaApi = (payload) => ({ type: PEGA_API, payload });

export const getRequest = () => async (dispatch) => {
  dispatch(inicialRequest());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await response.json();
  const resultFitered = Object.keys(result).filter((item) => item !== 'USDT');
  return dispatch(respostaApi(resultFitered));
};

const pegaGastos = (payload) => ({ type: PEGA_GASTOS, payload });

export const getRequestExpencies = (payload) => async (dispatch) => {
  dispatch(inicialRequest());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await response.json();
  return dispatch(pegaGastos({ ...payload, exchangeRates: result }));
};
