import { Container, Greeting, Module } from "./style"

const Header = ({ user: { name, course_module } }) => {
  return (
    <Container>
      <Greeting>
        Olá, {name}
      </Greeting>
      <Module>{course_module}</Module>
    </Container>
  )
}

export { Header }
