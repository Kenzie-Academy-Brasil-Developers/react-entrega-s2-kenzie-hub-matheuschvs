import { useForm } from 'react-hook-form';

import { TextField } from '../../components/TextField'

import logoImg from '../../assets/logo.svg'

import { Container, Form, Logo, RegisterText, Title } from './style'
import { Button } from '../../components/Button';

const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

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
        <Button>Entrar</Button>
        <RegisterText>
          Ainda não possui uma conta?
        </RegisterText>
        <Button
          disabled
        >Cadastre-se</Button>
      </Form>
    </Container>
  )
}

export { Home }
