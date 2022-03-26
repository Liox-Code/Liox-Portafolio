import styled from 'styled-components'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 1.2rem;
  width: 100%;
  padding: 2rem;
  background-color: var(--purple);
  border-radius: 2rem;
`
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`

export const Title = styled.h2`
  color: var(--primary-color);
  font-size: var(--x5);
  text-align: center;
`
export const SubTitle = styled.h3`
  color: var(--primary-color);
  font-size: var(--x4);
  text-align: center;
`

export const Description = styled.div`
  width: 100%;
  color: var(--secondary-color-light);
  font-size: var(--x4);
  text-align: justify;
`

export const SocialMediaContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 20px;
  height: 40px;
  width: 100%;
`

export const SocialMediaIcon = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--white);
  border-radius: 100%;
`

interface IIcon {
  IconColor: string
}

export const Icon = styled(FontAwesomeIcon)<IIcon>`
  width: 80%;
  height: 80%;
  color: ${props => props.IconColor};
`
