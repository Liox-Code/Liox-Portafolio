import React from 'react'

// Components
import AboutMe from '../components/AboutMe'
import Portrait from '../components/Portrait'
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
      <Portrait />
    </S.Container>
  )
}

export default index
