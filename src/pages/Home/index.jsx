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
  ModalButtons,
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

const updateSchema = yup.object().shape({
  title: yup.string().nullable(),
  status: yup
    .object()
    .required('Campo obrigatório'),
});

const Home = ({ isAuthenticated, user, signOut }) => {
  const [techs, setTechs] = useState([]);
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const location = useLocation();
  const { control, handleSubmit, register, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });
  const { control: updateControl,
    handleSubmit: updateHandleSubmit,
    register: updateRegister,
    formState: { errors: updateErrors },
    setValue,
    getValues
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(updateSchema),
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

  const handleUpdateTech = async ({ id, status }) => {
    const dataToSend = {
      status: status.value
    }

    try {
      const token = localStorage.getItem('@kenziehub:token');

      await API.put(`users/techs/${id}`, dataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      setIsUpdateModalOpen(false);
      toast.success('Tecnologia atualizada com sucesso!');
      updateTechs();
    } catch (err) {
      toast.error('Erro ao atualizar tecnologia')
    }
  }

  const handleRemoveTech = async () => {
    const id = getValues('id');

    try {
      const token = localStorage.getItem('@kenziehub:token');

      await API.delete(`users/techs/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      setIsUpdateModalOpen(false);
      toast.success('Tecnologia removida com sucesso!');
      updateTechs();
    } catch (err) {
      toast.error('Erro ao remover tecnologia')
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
        <ReactModal
          isOpen={isUpdateModalOpen}
        >
          <ModalHeader>
            <ModalTitle>Tecnologia Detalhes</ModalTitle>
            <CloseModalButton
              onClick={() => setIsUpdateModalOpen(false)}
            >x</CloseModalButton>
          </ModalHeader>
          <ModalBody onSubmit={updateHandleSubmit(handleUpdateTech)}>
            <TextField
              label='Nome do projeto'
              register={updateRegister}
              fieldName='title'
              error={updateErrors.title?.message}
              disabled
            />
            <TextField
              register={updateRegister}
              fieldName='id'
              type='hidden'
            />
            <Select
              label='Status'
              control={updateControl}
              fieldName='status'
              options={options}
              error={updateErrors.status?.message}
            />
            <ModalButtons>
              <Button type='submit'>
                Salvar alterações
              </Button>
              <Button
                type='button'
                greyScale
                onClick={handleRemoveTech}
              >
                Excluir
              </Button>
            </ModalButtons>
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
                <TechItem
                  key={id}
                  techId={id}
                  title={title}
                  status={status}
                  setIsOpen={setIsUpdateModalOpen}
                  setValue={setValue}
                />
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
