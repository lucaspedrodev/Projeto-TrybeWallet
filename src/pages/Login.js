import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pegaEmail } from '../redux/actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    btnDisable: true,

  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.verificaBtn();
    });
  };

  verificaBtn = () => {
    const { email, password } = this.state;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
    const verEmail = email && regex.test(email);
    const seis = 6;
    const verSenha = password.length >= seis;
    this.setState({
      btnDisable: !(verEmail && verSenha),
    });
  };

  handleClick = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(pegaEmail(email));
    history.push('/carteira');
  };

  render() {
    const { btnDisable } = this.state;
    return (
      <div>
        <input
          type="email"
          placeholder="e-mail"
          data-testid="email-input"
          name="email"
          onChange={ this.handleInput }
        />

        <input
          type="password"
          placeholder="senha"
          data-testid="password-input"
          name="password"
          onChange={ this.handleInput }
        />
        <button
          type="button"
          disabled={ btnDisable }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default connect()(Login);
