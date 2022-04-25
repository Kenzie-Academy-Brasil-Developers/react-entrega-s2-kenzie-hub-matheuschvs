import ReactSelect from 'react-select';
import { Controller } from 'react-hook-form';

import {
  Container,
  HelperText,
  Label
} from './style'

const Select = ({ fieldName, label, control, options, error }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Controller
        control={control}
        name={fieldName}
        render={({
          field: { onChange, onBlur, name, value, ref },
        }) => (
          <ReactSelect
            onBlur={onBlur}
            onChange={onChange}
            name={name}
            value={value}
            ref={ref}
            options={options}
            className='react-select-container'
            classNamePrefix='react-select'
          />
        )}
        defaultValue={options[0]}
      />
      {error && <HelperText>{error}</HelperText>}
    </Container>
  )
}

export { Select }
