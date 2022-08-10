import React from 'react'

// Components
import AboutMe from '@components/AboutMe'
import SkillsTools from '@components/SkillsTools'
import Projects from '@components/Projects'

// Styles
import * as S from '../styles/index'

const index = () => {
  return (
    <S.Container>
      <S.ProjectContainer>
        <Projects />
      </S.ProjectContainer>
      <S.SkillsContainer>
        <SkillsTools />
      </S.SkillsContainer>
      <S.AboutMeContainer>
        <AboutMe />
      </S.AboutMeContainer>
    </S.Container>
  )
}

export default index
