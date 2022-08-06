import React from 'react'
import Link from 'next/link'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

// Styles
import * as S from './styles'

type TButtonProps = {
  disabled?: boolean
  linkPath?: string
  text?: string | JSX.Element | null
  icon?: IconProp | null
  type?: 'button' | 'submit' | 'reset' | 'link'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const Button: React.FC<TButtonProps> = (props: TButtonProps) => {
  const {
    disabled = false,
    linkPath = '#',
    text = null,
    icon = null,
    type = 'button',
    onClick = () => null
  } = props
  return (
    <>
      {type === 'link' && (
        <Link href={linkPath} passHref>
          <S.SCLink>
            {icon && <S.Icon icon={icon && icon} />}
            {text && text}
          </S.SCLink>
        </Link>
      )}
      {(type === 'button' || type === 'submit' || type === 'reset') && (
        <S.Button type={type && type} onClick={onClick} disabled={disabled}>
          {icon && icon}
          {text && text}
        </S.Button>
      )}
    </>
  )
}

export default Button
