import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { API } from '../../config/api'

import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { SecondaryButton } from "../../components/SecondaryButton";
import { TechItem } from "../../components/TechItem";

import { Container, Content, ContentHeader, ListTitle, TechList, EmptyTechs, EmptyText } from './style';

const Home = ({ isAuthenticated, user, signOut }) => {
  const [techs, setTechs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    updateTechs();
  }, [])

  const updateTechs = async () => {
    const response = await API.get(`users/${user.id}`)

    const { techs: responseTechs } = response.data;

    setTechs(responseTechs);
  }

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
            {techs.length > 0 ?
              techs.map(({ id, title, status }) => (
                <TechItem key={id} title={title} status={status} />
              )) :
              <EmptyTechs>
                <EmptyText>Nenhuma tecnologia foi encontrada.</EmptyText>
              </EmptyTechs>
            }
          </TechList>
        </Content>
      </Container> :
      <Navigate to="/" state={{ from: location }} replace />
  )
}

export { Home }
