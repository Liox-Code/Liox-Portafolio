import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-areas: 'projects aboutMe';
  grid-gap: 2rem;
  padding: 2rem;
`
export const ProjectContainer = styled.div`
  grid-area: projects;
`
export const AboutMeContainer = styled.div`
  grid-area: aboutMe;
`
