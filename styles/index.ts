import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-auto-rows: minmax(100vh, max-content);
  grid-template-areas:
    'aboutMe'
    'skills'
    'projects';
  align-items: center;
  grid-gap: 20px;
  padding: 20px;
`

export const AboutMeContainer = styled.div`
  grid-area: aboutMe;
`

export const SkillsContainer = styled.div`
  grid-area: skills;
`

export const ProjectContainer = styled.div`
  grid-area: projects;
`
