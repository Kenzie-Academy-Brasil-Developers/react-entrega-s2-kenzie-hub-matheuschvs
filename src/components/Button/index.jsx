import { StyledButton } from './style'

const Button = ({ disabled = false, children, ...rest }) => {
  return (
    <StyledButton
      disabled={disabled}
      {...rest}
    >{children}</StyledButton>
  )
}

export { Button }
