import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Styles
import * as S from './styles'

const Navbar = () => {
  const Links = [
    { id: 'lk-1', text: 'INICIO', path: './home' },
    { id: 'lk-2', text: 'PROYECTOS', path: './proyectos' },
    { id: 'lk-3', text: 'CONTACTO', path: './contacto' }
  ]
  return (
    <S.Container>
      <S.LogoContainer>
        <Image
          src="/images/CircularLogo.svg"
          width={50}
          height={50}
          alt="Logo"
        />
      </S.LogoContainer>
      <S.Nav>
        {Links.map(link => {
          const { id, text, path } = link
          return (
            <Link href={path} key={id} passHref>
              <S.Link>{text}</S.Link>
            </Link>
          )
        })}
      </S.Nav>
    </S.Container>
  )
}

export default Navbar
