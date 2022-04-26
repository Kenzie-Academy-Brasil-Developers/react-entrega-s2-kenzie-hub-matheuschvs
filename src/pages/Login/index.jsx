import { toast } from 'react-toastify';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { API } from '../../config/api'

import { TextField } from '../../components/TextField'
import { Button } from '../../components/Button';

import logoImg from '../../assets/logo.svg'

import { Container, Form, Logo, RegisterText, Title } from './style'

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Campo obrigatório')
    .email('Adicione um e-mail válido'),
  password: yup
    .string()
    .required('Campo obrigatório')
})

const Login = ({ isAuthenticated, signIn }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/home';

  const onFormSubmit = async (data) => {
    try {
      const response = await API.post('sessions', data);

      const { token, user } = response.data;

      signIn({ token, user });

      toast.success('Login realizado com sucesso.');
      navigate(from, { replace: true });
    } catch (err) {
      toast.error('Ops! algo deu errado.')
    }
  }

  const handleGoToRegister = () => {
    navigate('/register')
  }

  return (
    isAuthenticated ?
      <Navigate to='/home' /> :
      <Container>
        <Logo
          src={logoImg}
          alt='Logo with Text: Kenzie Hub'
          animate={{
            translateY: [-1000, 0],
          }}
          transition={{ duration: 1 }}
        />
        <Form
          onSubmit={handleSubmit(onFormSubmit)}
          animate={{
            translateY: [1000, 0],
          }}
          transition={{ duration: 1 }}
        >
          <Title>Login</Title>
          <TextField
            register={register}
            fieldName='email'
            label='Email'
            error={errors.email?.message}
            type='email'
            placeholder='Digite aqui seu email'
          />
          <TextField
            register={register}
            fieldName='password'
            label='Senha'
            error={errors.password?.message}
            type='password'
            placeholder='Digite aqui sua senha'
          />
          <Button
            type='submit'
          >Entrar</Button>
          <RegisterText>
            Ainda não possui uma conta?
          </RegisterText>
          <Button
            greyScale
            type='button'
            onClick={() => handleGoToRegister()}
          >Cadastre-se</Button>
        </Form>
      </Container>
  )
}

export { Login }
