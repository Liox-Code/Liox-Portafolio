import styled from 'styled-components'

export const Body = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: max-content auto max-content;
`

export const HeaderContainer = styled.div`
  padding: 0 3rem;
  background-color: var(--purple);
  z-index: 100;
`

export const Container = styled.div`
  display: grid;
  justify-content: center;
  background-color: var(--purple-dark);
`

export const FooterContainer = styled.div`
  padding: 0 3rem;
  background-color: var(--purple);
`

export const PaddingContainer = styled.div`
  max-width: 1200px;
`
