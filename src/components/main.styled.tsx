import styled from 'styled-components'

export const Container = styled.div<{ mode?: 'dark' | 'light' }>`
  width: 80%;
  margin: auto;
  height: 100vh;
  overflow-y: auto;
  padding: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border: 2px solid #F1F0E8;
    //border: 2px solid ${props => props?.mode === 'dark' ? 'black' : 'red'}
`