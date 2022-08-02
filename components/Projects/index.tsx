import React from 'react'

// Components
import ProjectItem from '../ProjectItem'

// Styles
import * as S from './styles'

const Projects = () => {
  const ProjectsData = [
    {
      id: 'pd-1',
      imageLink: 'https://dixel.netlify.app/',
      imagePath: '/images/wpMagenta.jpg',
      title: 'Dixel - Landing Page',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio amet sint enim quibusdam maiores fuga illo quam aspernatur, qui'
    },
    {
      id: 'pd-2',
      imageLink: 'https://landing-page-sauberkeit.netlify.app/',
      imagePath: '/images/wpBlue.jpg',
      title: 'Sauberkeit - Landing Page',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio amet sint enim quibusdam maiores fuga illo quam aspernatur, qui'
    },
    {
      id: 'pd-3',
      imageLink: 'https://dreamy-fermat-56ece1.netlify.app/',
      imagePath: '/images/wpLightBlue.jpg',
      title: 'Video Player',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio amet sint enim quibusdam maiores fuga illo quam aspernatur, qui'
    },
    {
      id: 'pd-4',
      imageLink: 'https://ps-liox.netlify.app/',
      imagePath: '/images/wpLightBlue.jpg',
      title: 'Store',
      description: 'Lorem IPsum'
    },
    {
      id: 'pd-5',
      imageLink: 'https://instapet-eight.vercel.app/',
      imagePath: '/images/wpLightBlue.jpg',
      title: 'Instapet',
      description: 'Lorem IPsum'
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
