import { StyledButton } from './style'

const Button = ({ greyScale = false, children, ...rest }) => {
  return (
    <StyledButton
      greyScale={greyScale}
      {...rest}
    >{children}</StyledButton>
  )
}

export { Button }
