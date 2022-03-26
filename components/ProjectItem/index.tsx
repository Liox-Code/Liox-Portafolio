import React from 'react'
import Image from 'next/image'

// Styles
import * as S from './styles'

const ProjectItem = () => {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image
          src="/images/wpMagenta.jpg"
          layout="fill"
          alt="Logo"
          objectFit="cover"
        />
      </S.ImageContainer>
      <S.ContentContainer>
        <S.Title>Proyecto</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio
          amet sint enim quibusdam maiores fuga illo quam aspernatur, qui
        </S.Description>
      </S.ContentContainer>
    </S.Container>
  )
}

export default ProjectItem
