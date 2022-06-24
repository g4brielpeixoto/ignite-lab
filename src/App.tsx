import { ApolloProvider } from '@apollo/client'
import Scrollbars from 'react-custom-scrollbars'
import { BrowserRouter } from 'react-router-dom'
import { client } from './lib/apollo'
import { Router } from './Router'

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Event /> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
