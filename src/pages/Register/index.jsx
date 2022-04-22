import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { TextField } from '../../components/TextField'
import { Button } from '../../components/Button';

import logoImg from '../../assets/logo.svg'

import { Container, Navigation, Form, Logo, Subtitle, Title } from './style'
import { SecondaryButton } from '../../components/SecondaryButton';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Campo obrigatório')
    .email('Adicione um e-mail válido'),
  password: yup
    .string()
    .required('Campo obrigatório')
    .matches(/(?=.*\d)/, 'Necessário um número')
    .matches(/(?=.*[A-Z])/, 'Necessário uma letra maiúscula')
    .matches(/(?=.*[a-z])/, 'Necessário uma letra minúscula')
    .matches(/(?=.*[!@#$&*])/, 'Necessário um caractere especial')
    .matches(/^.{8,}$/, 'Mínimo de 8 caracteres')
})

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });
  const navigate = useNavigate();

  const onFormSubmit = (data) => {
    console.log(data);
  }

  const handleGoBack = () => {
    navigate('/');
  }

  return (
    <Container>
      <Navigation>
        <Logo src={logoImg} alt='Logo with Text: Kenzie Hub' />
        <SecondaryButton
          onClick={handleGoBack}
        >
          Voltar
        </SecondaryButton>
      </Navigation>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <Title>Crie sua conta</Title>
        <Subtitle>
          Rápido e grátis, vamos nessa
        </Subtitle>
        <TextField
          register={register}
          fieldName='name'
          label='Nome'
          error={errors.name?.message}
          type='text'
          placeholder='Digite aqui seu nome'
        />
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
        <TextField
          register={register}
          fieldName='confirmPassword'
          label='Confirmar senha'
          error={errors.confirmPassword?.message}
          type='password'
          placeholder='Digite novamente sua senha'
        />
        {/* Missing Select */}
        <Button
          type='submit'
        >Cadastrar</Button>
      </Form>
    </Container>
  )
}

export { Register }
