import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail, despesas } = this.props;
    return (
      <div>
        <p data-testid="email-field">{ userEmail }</p>
        <p data-testid="total-field">
          {
            despesas.reduce((acc, current) => {
              const valor = Number(current.exchangeRates[current.currency].ask);
              const valorTotal = Number((valor * current.value).toFixed(2));
              return (acc + valorTotal);
            }, 0)
          }
        </p>
        <p data-testid="header-currency-field"> BRL </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  despesas: state.wallet.expenses,
});

Header.propTypes = {
  despesas: PropTypes.shape({
    reduce: PropTypes.func,
  }),
  userEmail: PropTypes.string.isRequired,
}.isRequired;
export default connect(mapStateToProps)(Header);
