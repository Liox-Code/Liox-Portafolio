import styled from 'styled-components'

// Components
import SectionTitle from '@components-ui/SectionTitle'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas:
    'SectionTitle'
    'SkillsList';
  justify-content: center;
  grid-gap: 20px;
  width: 100%;
`

export const SCSectionTitle = styled(SectionTitle)`
  grid-area: SectionTitle;
`

export const SkillsList = styled.div`
  grid-area: SkillsList;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, 160px);
  justify-content: center;
  justify-items: center;
  grid-gap: 40px;
  width: 100%;
`
