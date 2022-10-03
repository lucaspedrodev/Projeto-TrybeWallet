import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRequest, getRequestExpencies } from '../redux/actions';

console.log(getRequestExpencies());

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { moeda } = this.props;
    moeda();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { gastos } = this.props;
    gastos(this.state);
    this.setState((prevstate) => ({
      id: prevstate.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <div>
        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
            value={ value }
            name="value"
            type="number"
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            value={ description }
            name="description"
            type="text"
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            value={ currency }
            name="currency"
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            {currencies.map((el) => <option value={ el } key={ el }>{ el }</option>)}
          </select>
        </label>

        <label htmlFor="metodo">
          Método de Pagamento:
          <select
            id="metodo"
            value={ method }
            name="method"
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Categoria:
          <select
            id="tag"
            value={ tag }
            name="tag"
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar Despesas

        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  moeda: () => dispatch(getRequest()),
  gastos: (payload) => dispatch(getRequestExpencies(payload)),
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
