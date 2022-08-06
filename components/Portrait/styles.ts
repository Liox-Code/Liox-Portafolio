import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--primary-color);
  background-image: url('/images/PortraitImage.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 400px;
  align-content: center;
  justify-content: center;
  justify-items: center;
  grid-gap: 1.6rem;
  height: 100%;
  width: 100%;
  background-color: var(--primary-op1);
`

export const Title = styled.h1`
  color: var(--white);
  font-size: var(--x8);
`

export const Description = styled.h2`
  color: var(--white);
  font-size: var(--x5);
  font-weight: 500;
  text-align: center;
`

export const ButtonClose = styled.button`
  height: 40px;
  width: 200px;
  background-color: var(--primary-op6);
  border: none;
  border-radius: 1.6rem;
  cursor: pointer;
  color: var(--white);
  font-size: var(--x6);
  outline: none;

  &:hover {
    background-color: var(--primary-op8);
  }
`
