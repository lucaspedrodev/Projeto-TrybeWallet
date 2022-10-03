import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { attbtn } from '../redux/actions';

class Table extends Component {
  handleClick = (id) => {
    const { expenses, atualiza } = this.props;
    const filtro = expenses.filter((el) => el.id !== id);
    atualiza(filtro);
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((el) => (
            <tr value={ el.id } key={ el.id }>
              <td>{el.description}</td>
              <td>{el.tag}</td>
              <td>{el.method}</td>
              <td>{Number(el.value).toFixed(2)}</td>
              <td>{el.exchangeRates[el.currency].name}</td>
              <td>{Number(el.exchangeRates[el.currency].ask).toFixed(2)}</td>
              <td>
                {Number((el.exchangeRates[el.currency].ask * el.value).toFixed(2))}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"

                >
                  Editar
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.handleClick(el.id) }
                >
                  Excluir
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }),
}.toFixed;

const mapDispatchToProps = (dispatch) => ({
  atualiza: (payload) => dispatch(attbtn(payload)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
