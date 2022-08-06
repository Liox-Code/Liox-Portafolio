import styled from 'styled-components'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'SectionTitle'
    'ProfileImage'
    'InfoContainer';
  justify-content: center;
  grid-gap: 1.2rem;
  width: 100%;
  border-radius: 2rem;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-areas:
      'SectionTitle SectionTitle'
      'ProfileImage InfoContainer';
  }
`

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

export const ImageContainer = styled.div`
  grid-area: ProfileImage;
  position: relative;
  width: 100%;
  height: 480px;
  border-radius: 2rem;
  overflow: hidden;

  @media (min-width: 800px) {
    height: 320px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;

    background-size: 400% 400%;
    background-repeat: no-repeat;
    background-image: var(--pri-sec-op6-diag-right-gradient);
    transition: all 0.8s ease;
  }

  &:hover:after {
    background-position: 100% 100%;
    transition: all 0.8s ease;
  }
`

export const InfoContainer = styled.div`
  grid-area: InfoContainer;
  display: grid;
  grid-template-areas:
    'Title'
    'Subtitle'
    'Description'
    'Links';
  grid-template-rows: repeat(4, max-content);
  grid-gap: 1.2rem;
  width: 100%;
  padding: 0 40px 20px;
`

export const Name = styled.h2`
  grid-area: Title;
  color: var(--primary-color);
  font-size: var(--x6);
  text-align: center;
`
export const Role = styled.h3`
  grid-area: Subtitle;
  color: var(--secondary-color);
  font-size: var(--x5);
  text-align: center;
`

export const Description = styled.div`
  grid-area: Description;
  width: 100%;
  color: var(--white);
  font-size: var(--x4);
  line-height: var(--x6);
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
