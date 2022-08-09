import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: var(--black);
`

export const Link = styled.a`
  font-size: var(--x4);
  color: var(--primary-color);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: var(--secondary-color);
  }
`
