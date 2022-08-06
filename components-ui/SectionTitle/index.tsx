import React from 'react'

// Styles
import * as S from './styles'

type TSectionTitle = {
  symbol: string
  title: string
}

const SectionTitle: React.FC<TSectionTitle> = (props: TSectionTitle) => {
  const { symbol, title } = props
  return (
    <S.SectionTitle>
      <S.TitleNumber>{symbol}.</S.TitleNumber>
      <S.TitleText>{title}</S.TitleText>
      <S.TitleLine />
    </S.SectionTitle>
  )
}

export default SectionTitle
