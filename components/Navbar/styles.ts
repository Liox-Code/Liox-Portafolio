import styled from 'styled-components'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: transparent;
`

export const LogoContainer = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100%;
  width: 60px;
  cursor: pointer;
`

export const MenuContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
`

export const MenuIcon = styled(FontAwesomeIcon)`
  width: 80%;
  height: 80%;
  color: var(--primary-color);
`

export const Nav = styled.nav`
  position: absolute;
  right: 0;
  top: 60px;
  display: grid;
  grid-auto-flow: row;
  width: 100%;
  min-width: 320px;

  @media (min-width: 800px) {
    position: static;
    grid-auto-flow: column;
    height: 100%;
  }
`

export const Link = styled.a`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100%;
  padding: 1.2rem 2rem;
  color: var(--primary-color);
  cursor: pointer;
  font-size: var(--x4);
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: var(--secondary-color);
  }
`
