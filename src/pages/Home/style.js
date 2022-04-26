import styled from 'styled-components';

export const Container = styled.main`
  background: var(--grey-4);

  min-height: 100vh;
`

export const Content = styled.main`
  background: var(--grey-4);

  padding: 1.25rem 0.75rem 1rem;
`

export const ContentHeader = styled.section`
  margin-bottom: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > button {
    height: 2rem;
    line-height: 100%;
    width: 2rem;
    font-size: 1.3rem;
  }
`

export const ListTitle = styled.h2`
`

export const TechList = styled.ul`
  background: var(--grey-3);

  border-radius: 4px;

  padding: 1.375rem 0.53125rem;

  & > li + li {
    margin-top: 1rem;
  }
`

export const EmptyTechs = styled.li``

export const EmptyText = styled.p`
  font: var(--headline-bold);
  color: var(--grey-1);
  text-align: center;
`

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--grey-2);

  padding: 0.75rem 1.25rem;
`

export const ModalTitle = styled.h3``

export const CloseModalButton = styled.button`
  line-height: 1.625rem;
  font-size: 1.3rem;
  color: var(--grey-1);

  background: transparent;
`

export const ModalBody = styled.form`
  padding: 1.25rem 1rem;

  & > div + div {
    margin-top: 1.25rem;
  }

  & > div + footer,
  & > div + button {
    margin-top: 1rem;
  }
`

export const ModalButtons = styled.footer`
  display: flex;
  align-items: center;

  & > button + button {
    margin-left: 1.375rem;

    max-width: 6.125rem;
  }
`
