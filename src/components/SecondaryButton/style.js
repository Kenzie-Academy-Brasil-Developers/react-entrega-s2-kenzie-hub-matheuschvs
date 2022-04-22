import styled from 'styled-components';

export const Button = styled.button`
  font: 600 0.599375rem 'Inter', sans-serif;
  line-height: 1.4375rem;
  color: var(--grey-0);

  width: 100%;
  padding: 1.29px 0;

  background: var(--grey-3);

  border-radius: 4px;

  &:hover {
    background: var(--grey-2);
  }

  @media (min-width: 961px) {
    font-size: 0.75rem;
    line-height: 1.77625rem;

    padding: 1.5px 0;
  }
`