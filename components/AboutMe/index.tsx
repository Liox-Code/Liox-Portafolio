import React from 'react'
import Image from 'next/image'

// Styles
import * as S from './styles'

const AboutMe = () => {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image
          src="/images/selfPicture.jpg"
          layout="fill"
          alt="Logo"
          objectFit="cover"
        />
      </S.ImageContainer>
      <S.Title>Angel Leonardo Mendieta Castillo</S.Title>
      <S.SubTitle>Programador Frontend</S.SubTitle>
      <S.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        consectetur impedit tenetur eveniet blanditiis mollitia rem similique
        magni, voluptates nostrum officiis id voluptatibus pariatur explicabo
        voluptas praesentium in at voluptate.
      </S.Description>
      <S.SocialMediaContainer>
        <S.SocialMediaIcon>
          <S.Icon
            icon={['fab', 'linkedin']}
            iconcolor="var(--linkedin-color)"
          />
        </S.SocialMediaIcon>
        <S.SocialMediaIcon>
          <S.Icon icon={['fab', 'github']} iconcolor="var(--github-color)" />
        </S.SocialMediaIcon>
        <S.SocialMediaIcon>
          <S.Icon
            icon={['fab', 'whatsapp']}
            iconcolor="var(--whatsapp-color)"
          />
        </S.SocialMediaIcon>
      </S.SocialMediaContainer>
    </S.Container>
  )
}

export default AboutMe
