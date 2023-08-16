import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ContainerHalf } from './pages/main-layout/main.styled.tsx'
import ContextProvider from './context'
import MainLayout from './pages/main-layout/MainLayout.tsx'
import ToogleMode from './components/theme/ToogleMode.tsx'
import LeftContainer from './pages/code-blocks/LeftContainer.tsx'
import RightContainer from './pages/code-blocks/RightContainer.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <ContextProvider>
      <ToogleMode />
      <MainLayout>
        <ContainerHalf>
          <LeftContainer />
        </ContainerHalf>
        <ContainerHalf>
          <RightContainer />
        </ContainerHalf>
      </MainLayout>
    </ContextProvider>
  </React.Fragment>,
)