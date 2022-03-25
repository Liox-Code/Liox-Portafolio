import styled from 'styled-components'

export const Body = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: max-content auto max-content;
`

export const HeaderContainer = styled.div`
  padding: 0 3rem;
  background-color: var(--black);
`

export const Container = styled.div`
  background-color: var(--black-light);
`

export const FooterContainer = styled.div`
  padding: 0 3rem;
  background-color: var(--primary-color-light);
`
