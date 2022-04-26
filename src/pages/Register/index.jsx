import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { API } from '../../config/api';
import { useNavigate, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { TextField } from '../../components/TextField'
import { Button } from '../../components/Button';
import { SecondaryButton } from '../../components/SecondaryButton';
import { Select } from '../../components/Select';

import logoImg from '../../assets/logo.svg'

import { Container, Navigation, Form, Logo, Subtitle, Title } from './style'

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Campo obrigatório')
    .matches(
      /^[a-záàâãéèêíïóôõöúçñ ]+$/i,
      'Permitidos apenas letras e espaços'
    ),
  email: yup
    .string()
    .required('Campo obrigatório')
    .email('Adicione um e-mail válido'),
  bio: yup
    .string()
    .required('Campo obrigatório'),
  contact: yup
    .string()
    .required('Campo obrigatório'),
  password: yup
    .string()
    .required('Campo obrigatório')
    .matches(/(?=.*\d)/, 'Necessário um número')
    .matches(/(?=.*[A-Z])/, 'Necessário uma letra maiúscula')
    .matches(/(?=.*[a-z])/, 'Necessário uma letra minúscula')
    .matches(/(?=.*[!@#$&*])/, 'Necessário um caractere especial')
    .matches(/^.{6,}$/, 'Mínimo de 6 caracteres'),
  confirmPassword: yup
    .string()
    .required('Campo obrigatório')
    .oneOf(
      [yup.ref('password')],
      'A senha e a confirmação devem ser iguais'
    ),
  course_module: yup
    .object()
    .required('Campo obrigatório')
})

const options = [
  {
    value: 'Primeiro módulo (Introdução ao Frontend)',
    label: 'Primeiro módulo (Introdução ao Frontend)'
  },
  {
    value: 'Segundo Módulo (Frontend avançado)',
    label: 'Segundo Módulo (Frontend avançado)'
  },
  {
    value: 'Terceiro módulo (Introdução ao Backend)',
    label: 'Terceiro módulo (Introdução ao Backend)'
  },
  {
    value: 'Quarto módulo (Backend Avançado)',
    label: 'Quarto módulo (Backend Avançado)'
  },
]

const Register = ({ isAuthenticated }) => {
  const [width, setWidth] = useState(0);
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });
  const navigate = useNavigate();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [])

  const onFormSubmit = async ({
    name, email, password, course_module, bio, contact
  }) => {
    const newData = {
      name,
      email,
      bio,
      contact,
      password,
      course_module: course_module.value,
    }

    try {
      await API.post('users', newData)

      toast.success('Conta criada com sucesso!')
      navigate('/')
    } catch (err) {
      toast.error('Ops! algo deu errado.')
    }
  }

  const handleGoBack = () => {
    navigate('/');
  }

  return (
    isAuthenticated ?
      <Navigate to='/home' /> :
      <Container>
        <Navigation
          animate={{ scaleX: width >= 961 ? [0, 2, 1.1] : [0, 2, 1.1, 1] }}
        >
          <Logo src={logoImg} alt='Logo with Text: Kenzie Hub' />
          <SecondaryButton
            onClick={handleGoBack}
          >
            Voltar
          </SecondaryButton>
        </Navigation>
        <Form
          onSubmit={handleSubmit(onFormSubmit)}
          animate={{
            scaleX: width >= 961 ? [0, 0, 0, 1.2, 1.1] : [0, 0, 0, 1.2, 1.1, 1],
            translateY: [1000, 0]
          }}
        >
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
            fieldName='bio'
            label='Biografia'
            error={errors.bio?.message}
            placeholder='Digite aqui sua biografia'
          />
          <TextField
            register={register}
            fieldName='contact'
            label='Contato'
            error={errors.contact?.message}
            placeholder='Digite aqui sua forma de contato'
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
          <Select
            label='Selecionar módulo'
            control={control}
            options={options}
            fieldName='course_module'
          />
          <Button
            type='submit'
          >Cadastrar</Button>
        </Form>
      </Container>
  )
}

export { Register }
