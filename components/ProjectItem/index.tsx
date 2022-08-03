import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Styles
import * as S from './styles'

interface IProjectData {
  id: string
  imagePath: string
  imageLink: string
  title: string
  description: string
}

type TProjectItemProps = {
  ProjectData: IProjectData
}

const ProjectItem: React.FC<TProjectItemProps> = (props: TProjectItemProps) => {
  const { ProjectData } = props

  const {
    imagePath = '#',
    imageLink = '#',
    title = '#',
    description = '#'
  } = ProjectData

  return (
    <S.Container>
      <Link href={imageLink}>
        <a>
          <S.ImageContainer>
            <Image
              src={imagePath}
              layout="fill"
              alt="Project Image"
              objectFit="cover"
            />
          </S.ImageContainer>
        </a>
      </Link>
      <S.ContentContainer>
        <S.Title>
          <Link href={imageLink}>
            <a>{title}</a>
          </Link>
        </S.Title>
        <S.Description>{description}</S.Description>
      </S.ContentContainer>
    </S.Container>
  )
}

export default ProjectItem
