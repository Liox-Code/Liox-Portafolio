import React from 'react'

//Styles
import * as S from './styles'

type TChildrenProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<TChildrenProps> = ({ children }: TChildrenProps) => {
  return (
    <S.Body>
      <S.HeaderContainer></S.HeaderContainer>
      <S.Container>{children}</S.Container>
      <S.FooterContainer></S.FooterContainer>
    </S.Body>
  )
}

export default Layout
