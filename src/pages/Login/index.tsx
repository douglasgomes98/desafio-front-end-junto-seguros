import React, { useRef } from 'react';
import * as Yup from 'yup';
import { SubmitHandler, FormHandles, UnformErrors } from '@unform/core';
import { Form } from '@unform/web';
import { useDispatch, useSelector } from 'react-redux';
import { Container, FormContainer } from './styles';
import Logo from '~/assets/images/logo.svg';
import Input from '~/components/Input';
import { signInRequest } from '~/store/modules/auth/actions';
import { Auth } from '~/store/modules/auth/types';
import { ApplicationState } from '~/store/types';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();
  const loading = useSelector<ApplicationState>((state) => state.auth.loading);

  const handleSubmit: SubmitHandler<Auth> = async (data) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('E-mail inválido.')
          .required('Campo obrigatório.'),
        password: Yup.string()
          .min(6, 'São necessários pelo 6 caracteres.')
          .required('Campo obrigatório.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(signInRequest(data));
    } catch (err) {
      const validationErrors: UnformErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      }
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <FormContainer className="rounded bg-white p-4 shadow-sm text-center">
        <img src={Logo} alt="logo" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input type="text" name="email" placeholder="Usuário" />
          <Input type="password" name="password" placeholder="Senha" />
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          )}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;
