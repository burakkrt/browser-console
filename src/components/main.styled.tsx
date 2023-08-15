import styled from 'styled-components'

export const Container = styled.div<{ mode?: 'dark' | 'light' }>`
  display: flex;
  flex-direction: row;
  gap: 50px;
  width: 80%;
  margin: auto;
  height: 100vh;
  padding: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border: 2px solid #F1F0E8;
`

export const ContainerHalf = styled.div`
  flex-basis: auto;
`