import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Container, ContainerHalf } from './components/main.styled.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Container mode={'dark'}>
      <ContainerHalf>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque, delectus dolorem ducimus earum neque
        non numquam placeat praesentium qui quod reiciendis temporibus voluptates? Dolore iusto minima nam quo tempora?
      </ContainerHalf>
      <ContainerHalf>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem esse fugiat illum in iusto, quaerat quisquam
        saepe tempora ut. Amet culpa minus odio perferendis quas quo repudiandae tempore velit veniam.
      </ContainerHalf>
    </Container>
  </React.StrictMode>,
)