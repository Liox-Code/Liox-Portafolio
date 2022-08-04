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
      <S.InfoContainer>
        <S.Title>Angel Leonardo Mendieta Castillo</S.Title>
        <S.SubTitle>Programador Frontend</S.SubTitle>
        <S.Description>
          I have been coding for about 1+ year in React JS and Next JS. I am a
          Front-End Developer with a especial focus on the creation of
          high-performance interface, user friendly experience and Mobile First
          Approach. Eager to develop my skills and contribute to a team of
          talented developers.
        </S.Description>
        <S.SocialMediaContainer>
          <S.SocialMediaIcon href="https://www.linkedin.com/in/LeonardoMendieta/">
            <S.Icon
              icon={['fab', 'linkedin']}
              iconcolor="var(--linkedin-color)"
            />
          </S.SocialMediaIcon>
          <S.SocialMediaIcon href="https://github.com/Liox-Code">
            <S.Icon icon={['fab', 'github']} iconcolor="var(--github-color)" />
          </S.SocialMediaIcon>
          <S.SocialMediaIcon href="https://api.whatsapp.com/send?phone=59169772238&text=Hola!%20%F0%9F%98%80%F0%9F%91%8B%F0%9F%A4%9A%F0%9F%91%8B">
            <S.Icon
              icon={['fab', 'whatsapp']}
              iconcolor="var(--whatsapp-color)"
            />
          </S.SocialMediaIcon>
        </S.SocialMediaContainer>
      </S.InfoContainer>
    </S.Container>
  )
}

export default AboutMe
