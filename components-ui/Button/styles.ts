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
  border-radius: 16px;
  color: var(--white);
  cursor: pointer;
  font-size: var(--x5);
  text-decoration: none;
  outline: none;

  &:hover {
    color: var(--secondary-color);
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
  color: var(--primary-color);
  font-size: var(--x6);
`
