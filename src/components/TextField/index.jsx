import { useState } from 'react';

import eyeIcon from '../../assets/eye.svg';

import {
  Container,
  HelperText,
  InputWrapper,
  Input,
  ToggleVisibility,
  Icon,
  Label
} from './style'

const TextField = ({ type, register, fieldName, label, error, ...rest }) => {
  const [hasContent, setHasContent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { onChange, onBlur, name, ref } = register(fieldName);

  function handleChange(event) {
    if (event.target.value) {
      setHasContent(true);
    } else {
      setHasContent(false);
    }

    onChange(event)
  }

  return (
    <Container>
      <Label htmlFor={fieldName} >{label}</Label>
      <InputWrapper>
        <Input
          id={fieldName}
          onChange={(e) => handleChange(e)}
          onBlur={onBlur}
          name={name}
          ref={ref}
          hasContent={hasContent}
          type={type === 'password' && isVisible ? 'text' : type}
          {...rest}
        />
        {type === 'password' &&
          <ToggleVisibility
            type='button'
            onClick={() => setIsVisible(!isVisible)}
          >
            <Icon src={eyeIcon} alt='an open eye' />
          </ToggleVisibility>}
      </InputWrapper>
      {error && <HelperText>{error}</HelperText>}
    </Container>
  )
}

export { TextField }
