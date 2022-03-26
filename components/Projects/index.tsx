import React from 'react'

// Components
import ProjectItem from '../ProjectItem'

// Styles
import * as S from './styles'

const Projects = () => {
  return (
    <S.Container>
      <S.Title>Proyectos</S.Title>
      <S.ProjectsContainer>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </S.ProjectsContainer>
    </S.Container>
  )
}

export default Projects
