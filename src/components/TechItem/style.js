import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.75rem;

  border-radius: 4px;

  background: var(--grey-4);

  &:hover {
    background: var(--grey-2);
  }
`

export const Title = styled.h3`
  line-height: 1.5rem;
`

export const Status = styled.p`
  color: var(--grey-1);
  font: var(--headline);
`