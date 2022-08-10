import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Components
import Button from '@components-ui/Button'

// Styles
import * as S from './styles'

interface IProjectData {
  id: string
  imagePath: string
  githubLink: string
  websiteLink: string
  title: string
  description: string
  techstack: string[]
}

type TProjectItemProps = {
  ProjectData: IProjectData
}

const ProjectItem: React.FC<TProjectItemProps> = (props: TProjectItemProps) => {
  const { ProjectData } = props

  const {
    imagePath = '#',
    githubLink = '#',
    websiteLink = '#',
    title = '#',
    description = '#',
    techstack = []
  } = ProjectData

  return (
    <S.Container>
      <S.ImageContainer>
        <Link href={websiteLink}>
          <a>
            <S.ImageWrapper>
              <Image
                src={imagePath}
                layout="fill"
                alt="Project Image"
                objectFit="cover"
              />
            </S.ImageWrapper>
          </a>
        </Link>
      </S.ImageContainer>
      <S.ContentContainer>
        <S.Title>
          <Link href={websiteLink}>
            <a>{title}</a>
          </Link>
        </S.Title>
        <S.Paragraph>{description}</S.Paragraph>
        <S.Paragraph>{techstack.join(' | ')}</S.Paragraph>
        <S.ProjectsLinksContainer>
          <Button
            type="link"
            linkPath={githubLink}
            text="Github"
            icon={['fab', 'github']}
          />
          <Button
            type="link"
            linkPath={websiteLink}
            text="Website"
            icon={['fas', 'link']}
          />
        </S.ProjectsLinksContainer>
      </S.ContentContainer>
    </S.Container>
  )
}

export default ProjectItem
