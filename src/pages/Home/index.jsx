import { Navigate, useLocation } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { SecondaryButton } from "../../components/SecondaryButton";

import { Container, Content, ContentHeader, ListTitle, TechList } from './style';

const Home = ({ isAuthenticated, user, signOut }) => {
  const location = useLocation();

  return (
    isAuthenticated ?
      <Container>
        <Navbar signOut={signOut} />
        <Header user={user} />
        <Content>
          <ContentHeader>
            <ListTitle>Tecnologias</ListTitle>
            <SecondaryButton>+</SecondaryButton>
          </ContentHeader>
          <TechList>
            <li><h3>React JS</h3></li>
          </TechList>
        </Content>
      </Container> :
      <Navigate to="/" state={{ from: location }} replace />
  )
}

export { Home }
