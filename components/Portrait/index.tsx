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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            distinctio, in pariatur, minima eaque ex voluptates vero tenetur
            eius minus vel ullam omnis ipsum repellat est similique
            consequuntur. Voluptates, reprehenderit.
          </S.Description>
          <S.ButtonClose onClick={handleToggleShow}>Continuar</S.ButtonClose>
        </S.Content>
      </S.Container>
    </Portal>
  )
}

export default Portrait
