import styled from 'styled-components'

export const Container = styled.div<{ theme?: 'dark' | 'light' }>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80%;
  margin: auto;
  height: 100vh;
  padding: 4rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border: ${props => props.theme === 'dark' ? 'none' : '#FFF6E0'};
  background-color: ${props => props.theme === 'dark' ? '#272829' : '#FFF6E0'};
  color: ${props => props.theme === 'dark' ? '#D8D9DA' : '#61677A'};
`

export const ContainerHalf = styled.div`
  width: 50%;
  max-width: 640px;
  overflow-y: auto;
  margin: 1rem;
  padding: 0 2rem 0 1rem;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #D8D9DA;
  }

  &::-webkit-scrollbar-thumb {
    background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%);
    border-radius: 24px;
  }

  & ::-webkit-scrollbar-track {
    background-color: #445069
  }

  scrollbar-width: thin;
  scrollbar-color: #DAC0A3 #F8F0E5;
`

export const VerticalLine = styled.hr`
  width: 3px;
  background-color: rgba(0, 0, 0, 0.3);
`