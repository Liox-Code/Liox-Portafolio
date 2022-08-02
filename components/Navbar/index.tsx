import React from 'react'
import Image from 'next/image'

// Styles
import * as S from './styles'

const Navbar = () => {
  // const Links = [
  //   { id: 'lk-1', text: 'INICIO', path: '/' },
  //   { id: 'lk-2', text: 'PROYECTOS', path: '/projects' }
  // ]
  return (
    <S.Container>
      <S.LogoContainer>
        <Image
          src="/images/TextLogo.svg"
          width={80}
          height={60}
          objectFit="cover"
          alt="Logo"
        />
      </S.LogoContainer>
      {/* <S.Nav>
        {Links.map(link => {
          const { id, text, path } = link
          return (
            <Link href={path} key={id} passHref>
              <S.Link>{text}</S.Link>
            </Link>
          )
        })}
      </S.Nav> */}
    </S.Container>
  )
}

export default Navbar
