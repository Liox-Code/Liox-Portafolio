import React from 'react'
import Image from 'next/image'

// Styles
import * as S from './styles'

interface IProjectData {
  id: string
  imageLink: string
  title: string
  description: string
}

type TProjectItemProps = {
  ProjectData: IProjectData
}

const ProjectItem: React.FC<TProjectItemProps> = (props: TProjectItemProps) => {
  const { ProjectData } = props

  const { imageLink = '#', title = '#', description = '#' } = ProjectData

  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={imageLink} layout="fill" alt="Logo" objectFit="cover" />
      </S.ImageContainer>
      <S.ContentContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.ContentContainer>
    </S.Container>
  )
}

export default ProjectItem
