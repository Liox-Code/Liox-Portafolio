import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  border-radius: 8px;
  transition: all 1s ease;

  &:hover {
    box-shadow: -5px -5px 30px 5px var(--primary-op6),
      5px 5px 30px 5px var(--complementary-07-op6);
    transition: all 1s ease;
  }
`

export const ImageContainer = styled.div`
  grid-area: 1 / 1 / 3 / 3;
  position: relative;
  width: 100%;
  min-height: 400px;
  z-index: 0;
`

export const ContentContainer = styled.div`
  grid-area: 1 / 1 / 3 / 3;
  display: grid;
  grid-template-rows: max-content auto max-content max-content;
  grid-gap: 2.8rem;
  padding: 60px 40px;
  background: var(--black-op8);
  z-index: 1;
`

export const Title = styled.h2`
  font-size: var(--x5);

  & a {
    color: var(--secondary-color);
    text-decoration: none;
  }

  & a:active,
  & a:hover,
  & a.visited {
    color: var(--secondary-color);
  }
`

export const Paragraph = styled.p`
  color: var(--white);
  font-size: var(--x5);
  text-align: justify;
  line-height: var(--x8);
`

export const ProjectsLinksContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 1.2rem;
  width: 100%;
  height: 40px;
`
