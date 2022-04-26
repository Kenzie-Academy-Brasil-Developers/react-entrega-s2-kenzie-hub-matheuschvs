import styled from 'styled-components';
import { motion } from "framer-motion"

export const Item = styled.li`
`

export const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0.75rem;

  border-radius: 4px;

  border: 1px solid var(--grey-4);
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