import React from 'react'

// Components
import Navbar from '../Navbar'

// Styles
import * as S from './styles'

type TChildrenProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<TChildrenProps> = ({ children }: TChildrenProps) => {
  return (
    <S.Body>
      <S.HeaderContainer>
        <Navbar />
      </S.HeaderContainer>
      <S.Container>{children}</S.Container>
      <S.FooterContainer>Footer</S.FooterContainer>
    </S.Body>
  )
}

export default Layout
