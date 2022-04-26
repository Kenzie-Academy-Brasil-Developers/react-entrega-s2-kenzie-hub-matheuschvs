import logoImg from '../../assets/logo.svg';

import { SecondaryButton } from '../SecondaryButton';

import { Container, Content, Logo } from "./style"

const Navbar = ({ signOut }) => {
  return (
    <Container>
      <Content>
        <Logo src={logoImg} alt='Logo with Text: Kenzie Hub' />
        <SecondaryButton
          onClick={signOut}
        >Sair</SecondaryButton>
      </Content>
    </Container>
  )
}

export { Navbar }
