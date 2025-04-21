import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { App } from './App'
import { LoadingSpin } from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={ <LoadingSpin /> }>
      <Provider store={ store } >
        <BrowserRouter>

          <App />
          
        </BrowserRouter>
      </Provider>
    </Suspense>
  </StrictMode>,
)
