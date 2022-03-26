import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: var(--purple-light);
  border-radius: 8px;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
`

export const ContentContainer = styled.div`
  display: grid;
  grid-gap: 1.2rem;
  padding: 1.2rem;
`

export const Title = styled.h2`
  color: var(--primary-color);
  font-size: var(--x5);
`

export const Description = styled.div`
  color: var(--secondary-color-light);
  font-size: var(--x4);
  text-align: justify;
`
