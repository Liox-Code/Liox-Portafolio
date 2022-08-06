import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: var(--complementary-10-color);
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
  font-size: var(--x5);

  & a {
    color: var(--primary-color);
    text-decoration: none;
  }

  & a:active,
  & a:hover,
  & a.visited {
    color: var(--secondary-color);
  }
`

export const Description = styled.div`
  color: var(--white);
  font-size: var(--x4);
  text-align: justify;
`
