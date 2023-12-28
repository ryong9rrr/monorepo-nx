import React from 'react'
import logo from './logo.svg'
import './App.css'

import styled from '@emotion/styled'
import { vars, classes } from '@repo/themes'

function App() {
  return <View />
}

const View = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text1 className="heading4xl">Text</Text1>
        <Text2>Text2</Text2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

const Text1 = styled.p`
  color: ${vars.colors.$static.light.blue[500]};
`

const Text2 = styled.p`
  ${classes.typography.heading['lg']};
  color: ${vars.colors.$static.light.red[500]};
`

export default App
