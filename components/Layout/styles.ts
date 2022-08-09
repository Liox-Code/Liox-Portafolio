import styled from 'styled-components'

export const Body = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: max-content auto max-content;
  background-color: var(--black);
`

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 3rem;
  z-index: 100;
  background: var(--black-op6);
`

export const Container = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 60px;

  @media (min-width: 800px) {
    margin-top: 0;
  }
`

export const FooterContainer = styled.div`
  padding: 0 3rem;
  background-color: var(--);
`

export const PaddingContainer = styled.div`
  max-width: 1200px;
`
