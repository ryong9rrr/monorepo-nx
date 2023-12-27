import React from 'react'
import logo from './logo.svg'
import './App.css'

import styled from '@emotion/styled'
import { vars } from '@repo/themes'

function App() {
  return <View />
}

const View = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text>
          Edit <code>src/App.tsx</code> and save to reload.
        </Text>
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

const Text = styled.p`
  color: ${vars.colors.$static.light.blue[500]};
`

export default App
