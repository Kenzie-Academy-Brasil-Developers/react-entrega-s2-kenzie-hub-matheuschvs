import styled from 'styled-components';

export const Container = styled.div``

export const Label = styled.label`
  font: 400 0.610625rem 'Inter', sans-serif;
  color: var(--grey-0);

  margin-bottom: 1.125rem;

  display: block;

  @media (min-width: 961px) {
    font-size: 0.76125rem;

    margin-bottom: 1.375rem;
  }
`

export const InputWrapper = styled.div`
  position: relative;

  & + p {
    margin-top: 1.125rem;
  }

  @media (min-width: 961px) {
    & + p {
      margin-top: 1.375rem;
    }
  }
`

export const Input = styled.input`
  font: 400 0.8125rem 'Inter', sans-serif;
  line-height: 1.323125rem;
  color: var(--grey-0);

  width: 100%;
  padding: 0.52625rem 0.8125rem;

  background: var(--grey-2);

  border: 1.22px solid ${props => props.hasContent ? 'var(--grey-0)' : 'var(--grey-2)'};
  border-radius: 4px;

  &::placeholder {
    color: var(--grey-1);
  }

  &:focus {
    border-color: var(--grey-0);
  }

  @media (min-width: 961px) {
    font-size: 1rem;
    line-height: 1.625rem;

    padding: 0.65625rem 1rem;
  }
`

export const ToggleVisibility = styled.button`
  position: absolute;
  right: 0.6875rem;
  top: 0.8rem;

  background: transparent;

  padding: 0;

  @media (min-width: 961px) {
    top: 1.1rem;
  }
`

export const Icon = styled.img`

`

export const HelperText = styled.p`
  font: 400 0.625rem 'Inter', sans-serif;
  color: var(--grey-1);

  @media (min-width: 961px) {
    font-size: 0.75rem;
  }
`