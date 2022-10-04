import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';

describe('Testa o componente input', () => {
  test('testa se o input de email existe', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmailtest = screen.getByRole('textbox');
    expect(inputEmailtest).toBeInTheDocument();
  });

  test('testa se o input de senha existe', () => {
    renderWithRouterAndRedux(<App />);
    const inputSenhatest = screen.getByPlaceholderText(/senha/i);
    expect(inputSenhatest).toBeInTheDocument();
  });

  test('testa se o btn entrar existe e inicia desabilitado', () => {
    renderWithRouterAndRedux(<App />);
    const btnTest = screen.getByRole('button', { name: /entrar/i });
    expect(btnTest).toBeInTheDocument();
    expect(btnTest).toBeDisabled();
  });

  test('testa se o btn entrar habilita quando os inputs estão preenchidos e se vai para a rota /carteira quando clicado', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmailtest = screen.getByRole('textbox');
    const inputSenhatest = screen.getByPlaceholderText(/senha/i);
    const btnTest = screen.getByRole('button', { name: /entrar/i });
    userEvent.type(inputEmailtest, 'lucas@gmail.com');
    userEvent.type(inputSenhatest, '123456789');
    expect(inputEmailtest).toHaveValue('lucas@gmail.com');
    expect(inputSenhatest).toHaveValue('123456789');
    expect(btnTest).not.toBeDisabled();
    userEvent.click(btnTest);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
