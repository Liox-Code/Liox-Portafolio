import styled, { css } from 'styled-components'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const buttonStyle = css`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 0.8rem;
  height: 100%;
  padding: 8px 20px;
  background-color: var(--black);
  border: 1px solid transparent;
  color: var(--white);
  cursor: pointer;
  font-size: var(--x5);
  text-decoration: none;
  outline: none;

  background-size: 200% 100%;
  background-repeat: no-repeat;
  background-image: var(--opa-pry-com07-diag-left-gradient);
  transition: all 0.8s ease;

  &:hover {
    color: var(--secondary-color);
    background-position: 100% 100%;
    transition: all 0.8s ease;
  }

  &:focus {
    color: var(--secondary-color);
  }

  &:active {
    color: var(--secondary-color);
  }
`

export const SCLink = styled.a`
  ${buttonStyle}
`

export const Button = styled.button`
  ${buttonStyle}
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: var(--x6);
`
