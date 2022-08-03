import styled from 'styled-components'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  justify-content: space-between;
  height: 60px;
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
  color: var(--primary-color);
  cursor: pointer;
  font-size: var(--x4);
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: var(--secondary-color);
  }
`
