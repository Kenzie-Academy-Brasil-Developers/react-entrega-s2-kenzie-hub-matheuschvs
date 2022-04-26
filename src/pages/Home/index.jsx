import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import ReactModal from 'react-modal';

import { API } from '../../config/api'

import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { SecondaryButton } from "../../components/SecondaryButton";
import { TechItem } from "../../components/TechItem";
import { TextField } from '../../components/TextField';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';

import {
  Container,
  ModalHeader,
  ModalTitle,
  CloseModalButton,
  ModalBody,
  Content,
  ContentHeader,
  ListTitle,
  TechList,
  EmptyTechs,
  EmptyText
} from './style';
import { toast } from "react-toastify";

const options = [
  { value: 'Iniciante', label: 'Iniciante' },
  { value: 'Intermediário', label: 'Intermediário' },
  { value: 'Avançado', label: 'Avançado' }
]

const schema = yup.object().shape({
  title: yup
    .string()
    .required('Campo obrigatório')
    .matches(
      /^[a-záàâãéèêíïóôõöúçñ\- ]+$/i,
      'Permitidos apenas letras, espaços e hífen'
    ),
  status: yup
    .object()
    .required('Campo obrigatório'),
});

const Home = ({ isAuthenticated, user, signOut }) => {
  const [techs, setTechs] = useState([]);
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const location = useLocation();
  const { control, handleSubmit, register, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    ReactModal.setAppElement('body');
    updateTechs();
  }, [])

  const updateTechs = async () => {
    if (user) {
      try {
        const response = await API.get(`users/${user.id}`)

        const { techs: responseTechs } = response.data;

        setTechs(responseTechs);
      } catch (err) {
        toast.error('Erro ao listar as tecnologias')
      }
    }
  }

  const handleAddTech = async ({ title, status }) => {
    const dataToSend = {
      title,
      status: status.value
    }

    try {
      const token = localStorage.getItem('@kenziehub:token');

      await API.post('users/techs', dataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      setIsCreationModalOpen(false);
      toast.success('Nova tecnologia adicionada com sucesso!');
      updateTechs();
    } catch (err) {
      toast.error('Erro ao criar uma nova tecnologia')
    }
  }

  return (
    isAuthenticated ?
      <Container>
        <ReactModal
          isOpen={isCreationModalOpen}
        >
          <ModalHeader>
            <ModalTitle>Cadastrar Tecnologia</ModalTitle>
            <CloseModalButton
              onClick={() => setIsCreationModalOpen(false)}
            >x</CloseModalButton>
          </ModalHeader>
          <ModalBody onSubmit={handleSubmit(handleAddTech)}>
            <TextField
              label='Nome'
              register={register}
              fieldName='title'
              error={errors.title?.message}
            />
            <Select
              label='Selecionar status'
              control={control}
              fieldName='status'
              options={options}
              error={errors.status?.message}
            />
            <Button type='submit'>
              Cadastrar Tecnologia
            </Button>
          </ModalBody>
        </ReactModal>
        <Navbar signOut={signOut} />
        <Header user={user} />
        <Content>
          <ContentHeader>
            <ListTitle>Tecnologias</ListTitle>
            <SecondaryButton
              onClick={() => setIsCreationModalOpen(true)}
            >+</SecondaryButton>
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
