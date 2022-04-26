import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;

  width: 100%;
`

export const Content = styled.div`
  background: var(--grey-4);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 0.75rem 1.5rem;

  border-bottom: 1px solid var(--grey-3);

  & > button {
    max-width: 3.5rem;
    line-height: 1.8125rem;
    font-size: 0.75rem;
  }

  @media (min-width: 961px) {
    padding: 1.25rem 23.26vw;
  }
`

export const Logo = styled.img`
  width: 6.595625rem;
  height: 0.914375rem;
`
