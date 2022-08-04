import React from 'react'

// Components
import ProjectItem from '../ProjectItem'

// Styles
import * as S from './styles'

const Projects = () => {
  const ProjectsData = [
    {
      id: 'pd-1',
      imageLink: 'https://dixel.click/',
      imagePath: '/images/Project_Dixel.png',
      title: 'Dixel - Landing Page',
      description: `Landing page to promote Dixel web development services, to enhance traffic and service's sells.`
    },
    {
      id: 'pd-2',
      imageLink: 'https://landing-page-sauberkeit.netlify.app/',
      imagePath: '/images/Project_Sauberkeit.png',
      title: 'Sauberkeit - Landing Page',
      description: `Landing page to promote Sauberkeit's services, with the objective of encourage visitors to hire it's services.`
    },
    {
      id: 'pd-3',
      imageLink: 'https://dreamy-fermat-56ece1.netlify.app/',
      imagePath: '/images/Project_Video_Player.png',
      title: 'Video Player',
      description: 'Web Aplication to play and save your favorite videos.'
    },
    {
      id: 'pd-4',
      imageLink: 'https://ps-liox.netlify.app/',
      imagePath: '/images/Project_Platzi_Store.png',
      title: 'Store',
      description:
        'Web app store with merch of Platzi. This projects was done in a Platzi course of Gatsby. On this application you can add a product on the products cart and you can generate an invoice order.'
    },
    {
      id: 'pd-5',
      imageLink: 'https://instapet-eight.vercel.app/',
      imagePath: '/images/Project_Instapet.png',
      title: 'Instapet',
      description:
        'Web app clone of instagram focused to pets. In this app you can like photos and save them as favorites when logged in. Also you can filter photos by pet type. Mobile first web app.'
    },
    {
      id: 'pd-6',
      imageLink: 'https://product-store-platzi.netlify.app/',
      imagePath: '/images/Project_PlatziConf_Merch.png',
      title: 'PlatziConf Merch',
      description:
        'Web app store with merch of Platzi. This projects was done in a Platzi course of react hooks. On this application you can add, edit and erase a product on the products cart, at last you can generate an invoice order.'
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
