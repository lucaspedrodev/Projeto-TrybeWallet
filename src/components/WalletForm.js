import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRequest } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { moeda } = this.props;
    moeda();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="number" data-testid="value-input" />
        </label>

        <label htmlFor="descricao">
          Descrição:
          <input id="descricao" type="text" data-testid="description-input" />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" data-testid="currency-input">
            {currencies.map((el) => <option key={ el }>{ el }</option>)}
          </select>
        </label>

        <label htmlFor="metodo">
          Método de Pagamento:
          <select id="metodo" data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Categoria:
          <select id="tag" data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  moeda: () => dispatch(getRequest()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.array,
  export: PropTypes.any,
  moeda: PropTypes.func.isRequired,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
