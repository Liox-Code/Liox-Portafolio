import React from 'react'

// Components
import ProjectItem from '../ProjectItem'

// Styles
import * as S from './styles'

const Projects = () => {
  const ProjectsData = [
    {
      id: 'pd-1',
      imagePath: '/images/Project_Dixel.png',
      websiteLink: 'https://dixel.click/',
      githubLink: 'https://github.com/Liox-Code/dixel-landing-page',
      title: 'Dixel - Landing Page',
      description: `Landing page to promote Dixel web development services, to enhance traffic and service's sells.`,
      techstack: ['React JS', 'Javascript', 'CSS3', 'HTML5']
    },
    {
      id: 'pd-2',
      imagePath: '/images/Project_Sauberkeit.png',
      websiteLink: 'https://landing-page-sauberkeit.netlify.app/',
      githubLink: 'https://github.com/Liox-Code/Landing-Page-Sauberkeit',
      title: 'Sauberkeit - Landing Page',
      description: `Landing page to promote Sauberkeit's services, with the objective of encourage visitors to hire it's services.`,
      techstack: ['React JS', 'Javascript', 'CSS3', 'HTML5']
    },
    {
      id: 'pd-3',
      imagePath: '/images/Project_Video_Player.png',
      websiteLink: 'https://video-player-react-redux.netlify.app/',
      githubLink: 'https://github.com/Liox-Code/curso-react-router-redux',
      title: 'Video Player',
      description: 'Web Aplication to play and save your favorite videos.',
      techstack: [
        'React JS',
        'Redux',
        'Javascript',
        'Webpack',
        'Babel',
        'Eslint',
        'CSS3',
        'HTML5'
      ]
    },
    {
      id: 'pd-4',
      imagePath: '/images/Project_Platzi_Store.png',
      websiteLink: 'https://platzi-swag-store.netlify.app/',
      githubLink: 'https://github.com/Liox-Code/Gatsby-Store',
      title: 'Store',
      description:
        'Web app store with merch of Platzi. This projects was done in a Platzi course of Gatsby. On this application you can add a product on the products cart and you can generate an invoice order.',
      techstack: ['Gatsby', 'React JS', 'Javascript', 'CSS3', 'HTML5']
    },
    {
      id: 'pd-5',
      imagePath: '/images/Project_Instapet.png',
      websiteLink: 'https://instapet-eight.vercel.app/',
      githubLink: 'https://github.com/Liox-Code/curso-platzi-react-avanzado',
      title: 'Instapet',
      description:
        'Web app clone of instagram focused to pets. In this app you can like photos and save them as favorites when logged in. Also you can filter photos by pet type. Mobile first web app.',
      techstack: [
        'React JS',
        'Apollo',
        'Styled Components',
        'GraphQL',
        'Javascript',
        'Webpack',
        'Babel',
        'CSS3',
        'HTML5'
      ]
    },
    {
      id: 'pd-6',
      imagePath: '/images/Project_PlatziConf_Merch.png',
      websiteLink: 'https://product-store-platzi.netlify.app/',
      githubLink: 'https://github.com/Liox-Code/Curso_Profesional_React_Hooks',
      title: 'PlatziConf Merch',
      description:
        'Web app store with merch of Platzi. This projects was done in a Platzi course of react hooks. On this application you can add, edit and erase a product on the products cart, at last you can generate an invoice order.',
      techstack: [
        'React JS',
        'Javascript',
        'Eslint',
        'Prettier',
        'Husky',
        'Webpack',
        'Babel',
        'CSS3',
        'HTML5'
      ]
    }
  ]
  return (
    <S.Container>
      <S.SCSectionTitle symbol="03" title="Projects" />
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
