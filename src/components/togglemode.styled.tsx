import styled from 'styled-components'

export const Toggle = styled.div<{ theme?: string }>`
  position: absolute;
  right: 3rem;
  top: 3rem;
  text-transform: capitalize;

  label {
    color: ${props => props.theme === 'dark' ? 'white' : 'black'};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`