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
  grid-template-columns: minmax(auto, 400px);
  align-content: center;
  justify-content: center;
  justify-items: center;
  grid-gap: 1.6rem;
  height: 100%;
  width: 100%;
  background-color: var(--primary-op3);
`

export const Loader = styled.button`
  color: var(--secondary-color);
  font-size: var(--x10);
  background: transparent;
  border: none;
  outline: none;
`
