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
`