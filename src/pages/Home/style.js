import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  background: var(--grey-4);
`

export const Logo = styled.img`
  width: 101px;
  height: 14px;

  margin-bottom: 1.25rem;
`

export const Form = styled.form`
  width: 92.5vw;
  padding: 2.10rem 1.125rem;

  background: var(--grey-3);

  border-radius: 3px;
`

export const Title = styled.h1`
  font-size: 0.9025rem;
  line-height: 1.40375rem;
  text-align: center;

  margin-bottom: 1.4375rem;
`
