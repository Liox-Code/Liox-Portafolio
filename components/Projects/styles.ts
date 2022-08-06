import styled from 'styled-components'

// Components
import SectionTitle from '../../components-ui/SectionTitle'

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'SectionTitle'
    'ProjectsContainer';
  grid-gap: 2rem;
  width: 100%;
  border-radius: 2rem;
`
export const SCSectionTitle = styled(SectionTitle)`
  grid-area: SectionTitle;
`

export const ProjectsContainer = styled.div`
  grid-area: ProjectsContainer;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
