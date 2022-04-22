import { Button } from "./style"

const SecondaryButton = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
    >
      {children}
    </Button>
  )
}

export { SecondaryButton }
