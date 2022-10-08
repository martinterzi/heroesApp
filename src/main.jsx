import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HeroesApp } from './HeroesApp'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HeroesApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
