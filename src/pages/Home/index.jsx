import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
  // .matches(/(?=.*\d)/, 'Necessário um número')
  // .matches(/(?=.*[A-Z])/, 'Necessário uma letra maiúscula')
  // .matches(/(?=.*[a-z])/, 'Necessário uma letra minúscula')
  // .matches(/(?=.*[!@#$&*])/, 'Necessário um caractere especial')
  // .matches(/^.{8,}$/, 'Mínimo de 8 caracteres')
})

const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  const onFormSubmit = (data) => {
    console.log(data);
  }

  return (
    <Container>
      <Logo src={logoImg} alt='Logo with Text: Kenzie Hub' />
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <Title>Login</Title>
        <TextField
          register={register}
          fieldName='email'
          label='Email'
          error={errors.email?.message}
          type='email'
          placeholder='Digite aqui seu nome'
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
          disabled
          type='button'
        >Cadastre-se</Button>
      </Form>
    </Container>
  )
}

export { Home }
