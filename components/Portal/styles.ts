import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: var(--primary-opacity);
  z-index: 100;
`

export { Container }
