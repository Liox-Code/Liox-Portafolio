import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 'max-content' 'max-content';
  grid-template-areas:
    'aboutMe'
    'projects';
  grid-gap: 2rem;
  padding: 2rem;

  @media (min-width: 820px) {
    grid-template-columns: 4fr 1fr;
    grid-template-areas: 'projects aboutMe';
  }
`
export const ProjectContainer = styled.div`
  grid-area: projects;
`
export const AboutMeContainer = styled.div`
  grid-area: aboutMe;
`
