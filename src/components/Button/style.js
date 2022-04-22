import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;

  border-radius: 4px;

  background: ${props => props.disabled ? 'var(--grey-1)' : 'var(--color-primary)'};

  font: 500 0.8125rem 'Inter', sans-serif;
  color: #FFF;

  &:hover {
    background: ${props => props.disabled ? 'var(--grey-2)' : 'var(--color-primary-50)'};
  }

  @media (min-width: 961px) {
    font-size: 1rem;
  }
`