import React from 'react'

// Components
import AboutMe from '../components/aboutMe'
import Projects from '../components/Projects'

// Styles
import * as S from '../styles/index'

const index = () => {
  return (
    <S.Container>
      <S.ProjectContainer>
        <Projects />
      </S.ProjectContainer>
      <S.AboutMeContainer>
        <AboutMe />
      </S.AboutMeContainer>
    </S.Container>
  )
}

export default index
