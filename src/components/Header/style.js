import styled from 'styled-components';

export const Container = styled.header`
  background: var(--grey-4);

  border-bottom: 1px solid var(--grey-3);

  padding: 6.8125rem 0.75rem 2.25rem;

  @media (min-width: 961px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 7.375rem 23.26vw 2.8125rem;
  }
`

export const Greeting = styled.h1`
  margin-bottom: 0.75rem;

  color: var(--grey-0);

  @media (min-width: 961px) {
    margin-bottom: 0;
  }
`

export const Module = styled.p`
  font: var(--headline);

  color: var(--grey-1);
`