import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, FormContainer } from './styles';
import Logo from '~/assets/images/logo.svg';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  async function login(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <FormContainer className="rounded bg-white p-4 shadow-sm text-center">
        <img src={Logo} alt="logo" />
        <form className="mt-3" onSubmit={login}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Usuário"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            className="form-control mb-2"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {load ? (
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          )}
          {error && (
            <div className="alert alert-danger mt-2" role="alert">
              Usuário ou Senha incorretos.
            </div>
          )}
        </form>
      </FormContainer>
    </Container>
  );
};

export default Login;
