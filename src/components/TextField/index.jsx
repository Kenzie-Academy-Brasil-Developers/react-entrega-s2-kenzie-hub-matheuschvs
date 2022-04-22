import { useState } from 'react';

import { Container, HelperText, Input, Label } from './style'

const TextField = ({ register, fieldName, label, error, ...rest }) => {
  const { onChange, onBlur, name, ref } = register(fieldName);
  const [hasContent, setHasContent] = useState(false);

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
      <Label>{label}</Label>
      <Input
        onChange={(e) => handleChange(e)}
        onBlur={onBlur}
        name={name}
        ref={ref}
        hasContent={hasContent}
        {...rest}
      />
      {error && <HelperText>{error}</HelperText>}
    </Container>
  )
}

export { TextField }
