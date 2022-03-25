import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-between;
  height: 60px;
`

export const LogoContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100%;
  width: 60px;
  cursor: pointer;
`

export const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  height: 100%;
`

export const Link = styled.a`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100%;
  padding: 0 2rem;
  color: var(--primary-color-light);
  cursor: pointer;
  font-size: var(--x4);
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: var(--secondary-color-light);
  }
`
