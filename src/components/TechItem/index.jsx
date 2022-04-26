import { Item, Button, Title, Status } from './style';

const TechItem = ({ title, techId, status, setIsOpen, setValue }) => {
  const handleOpenModal = () => {
    setValue('title', title);
    setValue('id', techId);
    setValue('status', { label: status, value: status });
    setIsOpen(true);
  }

  return (
    <Item>
      <Button
        onClick={handleOpenModal}
        whileHover={{ scale: 1.02 }}
      >
        <Title>{title}</Title>
        <Status>{status}</Status>
      </Button>
    </Item>
  )
}

export { TechItem }
