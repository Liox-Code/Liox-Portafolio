import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  width: 100%;
  padding: 2rem;
  border-radius: 2rem;
`
export const Title = styled.h2`
  color: var(--primary-color);
  font-size: var(--x6);
`
export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, auto));
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  width: 100%;
  justify-content: space-between;
`
