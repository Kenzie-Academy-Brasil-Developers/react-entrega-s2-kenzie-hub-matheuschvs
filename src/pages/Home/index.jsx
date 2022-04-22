import { TextField } from '../../components/TextField'

import logoImg from '../../assets/logo.svg'

import { Container, Form, Logo, Title } from './style'

const Home = () => {
  return (
    <Container>
      <Logo src={logoImg} alt="Logo with Text: Kenzie Hub" />
      <Form>
        <Title>Login</Title>
        <TextField />
      </Form>
    </Container>
  )
}

export { Home }
