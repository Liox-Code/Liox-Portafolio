import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: minmax(100vh, max-content) minmax(100vh, max-content);
  grid-template-areas:
    'aboutMe'
    'projects';
  align-items: center;
  grid-gap: 20px;
  padding: 20px;
`
export const ProjectContainer = styled.div`
  grid-area: projects;
`
export const AboutMeContainer = styled.div`
  grid-area: aboutMe;
`
