import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  background: var(--grey-4);
`

export const Navigation = styled.nav`
  width: 92.5vw;
  max-width: 23.0625rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.5625rem;

  & > button {
    max-width: 5rem;
  }

  @media (min-width: 961px) {
    margin-bottom: 2rem;
  }
`

export const Logo = styled.img`
  width: 6.3125rem;
  height: 0.875rem;

  @media (min-width: 961px) {
    width: 9rem;
    height: 1.25rem;
  }
`

export const Form = styled.form`
  width: 92.5vw;
  max-width: 23.0625rem;
  padding: 2.10rem 1.125rem;

  background: var(--grey-3);

  border-radius: 3px;

  & > div + div {
    margin-top: 1.375rem;
  }

  & > div + button {
    margin-top: 1rem;
  }

  @media (min-width: 961px) {
    & > div + div {
      margin-top: 1.6875rem;
    }

    & > div + button {
      margin-top: 1.25rem;
    }
  }
`

export const Title = styled.h1`
  font-size: 0.9025rem;
  line-height: 1.40375rem;
  text-align: center;

  margin-bottom: 1.4375rem;
`

export const Subtitle = styled.p`
  font: var(--headline-bold);
  font-size: 0.601875rem;
  color: var(--grey-1);
  text-align: center;

  margin: 1.125rem 0 1.4375rem;

  @media (min-width: 961px) {
    font-size: 0.75rem;

    margin: 1.375rem 0 1.1875rem;
  }
`
