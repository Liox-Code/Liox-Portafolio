import styled from 'styled-components'

const Body = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: max-content auto max-content;
  background-color: var(--primary-color);
`

const HeaderContainer = styled.div`
  display: grid;
`

const Container = styled.div`
  padding: 0 30px;
`

const FooterContainer = styled.div``

export { Body, HeaderContainer, Container, FooterContainer }
