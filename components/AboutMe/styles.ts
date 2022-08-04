import styled from 'styled-components'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 'max-content' 'max-content';
  justify-content: center;
  grid-gap: 1.2rem;
  width: 100%;
  background-color: var(--purple);
  border-radius: 2rem;
`
export const ImageContainer = styled.div`
  position: relative;
  width: 320px;
  height: 100%;
`

export const InfoContainer = styled.div`
  display: grid;
  grid-template-areas:
    'Title'
    'Subtitle'
    'Description'
    'Links';
  grid-template-rows: repeat(4, max-content);
  grid-gap: 1.2rem;
  width: 100%;
  padding: 20px 40px;
`

export const Title = styled.h2`
  grid-area: Title;
  color: var(--primary-color);
  font-size: var(--x6);
  text-align: center;
`
export const SubTitle = styled.h3`
  grid-area: Subtitle;
  color: var(--secondary-color);
  font-size: var(--x5);
  text-align: center;
`

export const Description = styled.div`
  grid-area: Description;
  width: 100%;
  color: var(--secondary-color-light);
  font-size: var(--x4);
  text-align: justify;
`

export const SocialMediaContainer = styled.div`
  grid-area: Links;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 20px;
  height: 40px;
  width: 100%;
`

export const SocialMediaIcon = styled.a`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--white);
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    width: 50px;
    height: 50px;
    outline: 3px solid var(--primary-color);
  }
`

interface IIcon {
  iconcolor: string
}

export const Icon = styled(FontAwesomeIcon)<IIcon>`
  width: 80%;
  height: 80%;
  color: ${props => props.iconcolor};
`
