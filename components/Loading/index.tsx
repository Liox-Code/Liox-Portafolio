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
          <S.Loader onClick={handleToggleShow} disabled>
            Loading...
          </S.Loader>
        </S.Content>
      </S.Container>
    </Portal>
  )
}

export default Portrait
