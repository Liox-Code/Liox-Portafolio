import React from 'react'

// Components
import Skill from '@components/Skill'

// Constants
import { SKILLS } from '@constants/constants'

// Styles
import * as S from './styles'

const SkillsTools = () => {
  const SkillsData = [
    {
      skillId: 'sd-01',
      imagePath: '/images/icons/javascript.svg',
      title: 'JavaScript'
    },
    {
      skillId: 'sd-02',
      imagePath: '/images/icons/next-js.svg',
      title: 'Next JS'
    },
    {
      skillId: 'sd-03',
      imagePath: '/images/icons/react.svg',
      title: 'React'
    },
    {
      skillId: 'sd-04',
      imagePath: '/images/icons/redux.svg',
      title: 'Redux'
    },
    {
      skillId: 'sd-05',
      imagePath: '/images/icons/typescript.svg',
      title: 'Typescript'
    },
    {
      skillId: 'sd-06',
      imagePath: '/images/icons/python.svg',
      title: 'Python'
    },
    {
      skillId: 'sd-09',
      imagePath: '/images/icons/github.svg',
      title: 'Github'
    },
    { skillId: 'sd-10', imagePath: '/images/icons/linux.svg', title: 'Linux' },
    { skillId: 'sd-11', imagePath: '/images/icons/php.svg', title: 'Php' },
    { skillId: 'sd-12', imagePath: '/images/icons/mysql.svg', title: 'Mysql' },
    {
      skillId: 'sd-13',
      imagePath: '/images/icons/csharp.svg',
      title: 'Csharp'
    },
    { skillId: 'sd-14', imagePath: '/images/icons/unity.svg', title: 'Unity' }
  ]
  return (
    <S.Container id={SKILLS}>
      <S.SCSectionTitle symbol="02" title="Skills" />
      <S.SkillsList>
        {SkillsData.map(skillsData => {
          const { skillId, imagePath, title } = skillsData
          return <Skill key={skillId} imagePath={imagePath} title={title} />
        })}
      </S.SkillsList>
    </S.Container>
  )
}

export default SkillsTools
