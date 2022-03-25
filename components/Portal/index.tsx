import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

// Styles
import Container from './styles'

type TPortalProps = {
  children?: React.ReactNode
  show?: boolean
}

const Portal = React.forwardRef<HTMLDivElement | null, TPortalProps>(
  (props: TPortalProps, ref: React.ForwardedRef<HTMLDivElement | null>) => {
    const { children = null, show = false } = props
    const [portalRoot, setPortalRoot] = useState<Element | null>(null)

    useEffect(() => {
      setPortalRoot(document.getElementById('portalRoot'))
    }, [])

    return portalRoot && show
      ? createPortal(
          <Container>
            <div ref={ref}>{children}</div>
          </Container>,
          portalRoot
        )
      : null
  }
)

Portal.displayName = 'Portal'

export default Portal
