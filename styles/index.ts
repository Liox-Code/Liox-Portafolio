import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 'max-content' 'max-content';
  grid-template-areas:
    'aboutMe'
    'projects';
  grid-gap: 2rem;
  padding: 2rem;
`
export const ProjectContainer = styled.div`
  grid-area: projects;
`
export const AboutMeContainer = styled.div`
  grid-area: aboutMe;
`
