import React from 'react'

// Components
import ProjectItem from '../ProjectItem'

// Styles
import * as S from './styles'

const Projects = () => {
  const ProjectsData = [
    {
      id: 'pd-1',
      imageLink: '/images/wpMagenta.jpg',
      title: 'Proyecto 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio amet sint enim quibusdam maiores fuga illo quam aspernatur, qui'
    },
    {
      id: 'pd-2',
      imageLink: '/images/wpBlue.jpg',
      title: 'Proyecto 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio amet sint enim quibusdam maiores fuga illo quam aspernatur, qui'
    },
    {
      id: 'pd-3',
      imageLink: '/images/wpLightBlue.jpg',
      title: 'Proyecto 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio amet sint enim quibusdam maiores fuga illo quam aspernatur, qui'
    }
  ]
  return (
    <S.Container>
      <S.Title>Proyectos</S.Title>
      <S.ProjectsContainer>
        {ProjectsData.map(ProjectData => {
          const { id } = ProjectData
          return <ProjectItem key={id} ProjectData={ProjectData} />
        })}
      </S.ProjectsContainer>
    </S.Container>
  )
}

export default Projects
