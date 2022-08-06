import styled from 'styled-components'

export const SectionTitle = styled.div`
  grid-area: SectionTitle;
  display: flex;
  align-items: baseline;
  grid-gap: 0.8rem;
  width: 100%;
`

export const TitleNumber = styled.span`
  font-size: var(--x5);
  color: var(--secondary-color);
`

export const TitleText = styled.h2`
  font-size: var(--x7);
  color: var(--white);
  white-space: nowrap;
`

export const TitleLine = styled.hr`
  width: 100%;
  border-color: var(--secondary-color);
  align-self: center;
`
