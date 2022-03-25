import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

//Styles
import * as S from './styles'

type TPortalProps = {
  children?: React.ReactNode
  show?: boolean
}
const Portal = React.forwardRef<HTMLDivElement | null, TPortalProps>(
  (props: TPortalProps, ref: React.ForwardedRef<HTMLDivElement | null>) => {
    const { children, show = false } = props
    const [portalRoot, setPortalRoot] = useState<Element | null>(null)

    useEffect(() => {
      setPortalRoot(document.getElementById('portalRoot'))
    }, [])

    return portalRoot && show
      ? createPortal(
          <S.Container>
            <div ref={ref}>{children}</div>
          </S.Container>,
          portalRoot
        )
      : null
  }
)
export default Portal
