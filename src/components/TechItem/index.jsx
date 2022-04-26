import { Item, Title, Status } from './style';

const TechItem = ({ title, status }) => {
  return (
    <Item>
      <Title>{title}</Title>
      <Status>{status}</Status>
    </Item>
  )
}

export { TechItem }
