import { useForm } from 'react-hook-form';

import { TextField } from '../../components/TextField'

import logoImg from '../../assets/logo.svg'

import { Container, Form, Logo, Title } from './style'

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
          placeholder='Digite aqui seu nome'
        />
      </Form>
    </Container>
  )
}

export { Home }
