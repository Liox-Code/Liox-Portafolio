import styled from 'styled-components'

const Body = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: max-content auto max-content;
`

const HeaderContainer = styled.div`
  padding: 0 3rem;
  background-color: var(--black);
`

const Container = styled.div`
  background-color: var(--black-light);
`

const FooterContainer = styled.div`
  padding: 0 3rem;
  background-color: var(--primary-color-light);
`

export { Body, HeaderContainer, Container, FooterContainer }
