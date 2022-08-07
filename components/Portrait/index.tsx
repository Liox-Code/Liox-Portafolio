import React, { useState } from 'react'

// Components
import Portal from '../Portal'

// Styles
import * as S from './styles'

const Portrait = () => {
  const [show, setShow] = useState<boolean>(true)

  const handleToggleShow = () => {
    setShow(false)
  }

  return (
    <Portal show={show}>
      <S.Container>
        <S.Content>
          <S.Title>HI! I AM LIOX</S.Title>
          <S.Description>
            I&apos;m a frontend developer specializing in building user friendly
            and scalable products focus on the user experience.{' '}
          </S.Description>
          <S.ButtonClose onClick={handleToggleShow}>View my work</S.ButtonClose>
        </S.Content>
      </S.Container>
    </Portal>
  )
}

export default Portrait
