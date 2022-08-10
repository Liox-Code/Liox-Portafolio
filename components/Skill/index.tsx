import React from 'react'
import Image from 'next/image'

// Styles
import * as S from './styles'

type TSkills = {
  imagePath: string
  title: string
}

const Skill: React.FC<TSkills> = (props: TSkills) => {
  const { imagePath, title } = props
  return (
    <S.SkillContainer>
      <Image src={imagePath} alt="Skill Image" height="100px" width="100px" />
      <S.SkillTitle>{title}</S.SkillTitle>
    </S.SkillContainer>
  )
}

export default Skill
