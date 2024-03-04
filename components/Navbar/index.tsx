import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Hooks
import useWindowSize from '@hooks/useWindowSize'

// Constants
import { ABOUT_ME, SKILLS, PROJECTS } from '@constants/constants'

// Styles
import * as S from './styles'

const Navbar = () => {
  const size = useWindowSize()
  const [showMenu, setShowMenu] = useState(false)
  const Links = [
    { id: 'lk-1', text: 'ABOUT ME', path: `#${ABOUT_ME}` },
    { id: 'lk-3', text: 'SKILLS', path: `#${SKILLS}` },
    { id: 'lk-2', text: 'PROJECTS', path: `#${PROJECTS}` }
  ]

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

      {size && size < 800 && (
        <S.MenuContainer>
          {!showMenu ? (
            <S.MenuIcon
              icon={['fas', 'bars']}
              onClick={() => setShowMenu(true)}
            />
          ) : (
            <S.MenuIcon
              icon={['fas', 'xmark']}
              onClick={() => setShowMenu(false)}
            />
          )}
        </S.MenuContainer>
      )}
      {((size && size >= 800) || showMenu) && (
        <S.Nav>
          {Links.map(link => {
            const { id, text, path } = link
            return (
              <Link
                href={path}
                key={id}
                passHref
              >
                <S.Link>{text}</S.Link>
              </Link>
            )
          })}
        </S.Nav>
      )}
    </S.Container>
  )
}

export default Navbar
