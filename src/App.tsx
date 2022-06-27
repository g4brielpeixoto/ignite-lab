import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from './contexts/sideBar'
import { client } from './lib/apollo'
import { Router } from './Router'

function App() {
  return (
    <ApolloProvider client={client}>
      <SidebarProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SidebarProvider>
    </ApolloProvider>
  )
}

export default App
