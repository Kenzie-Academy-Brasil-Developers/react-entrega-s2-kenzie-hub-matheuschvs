import styled from 'styled-components';

export const Container = styled.div`
  .react-select__control {
    background: var(--grey-2);
    border-color: var(--grey-2);
    outline: none;

    &:hover {
      border-color: var(--grey-0);
    }
  }

  .react-select__indicator-separator {
    width: 0;
  }

  .react-select__indicator svg {
    color: var(--grey-1);
    width: 1rem;
  }

  .react-select__single-value {
    color: var(--grey-1);
    font: 400 0.8125rem 'Inter', sans-serif;
  }

  .react-select__menu-list {
    background: var(--grey-2);
  }

  .react-select__option {
    color: var(--grey-0);
    font: 400 0.8125rem 'Inter', sans-serif;
  }

  .react-select__option--is-selected {
    background: var(--grey-3);
  }

  .react-select__option--is-focused {
    background: var(--grey-1);
  }

  @media (min-width: 961px) {
    .react-select__control {
      min-height: 49px;
    }
  }
`

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

export const HelperText = styled.p`
  font: 400 0.625rem 'Inter', sans-serif;
  color: var(--grey-1);

  @media (min-width: 961px) {
    font-size: 0.75rem;
  }
`