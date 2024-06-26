import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import LightProvider from './contexts/LightContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LightProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </LightProvider>
)
