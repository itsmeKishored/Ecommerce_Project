import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './Store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './components/Counter.jsx'
import Calculater from './components/Calculater'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
import Profile from './components/Profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
<BrowserRouter>
<Routes>
  <Route path='/' element={<App />}/>
  <Route path='/products' element={<Products/>}></Route>
  <Route path='/counter' element={<Counter/>}/>
  <Route path='/cal' element={<Calculater/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/profile' element={<Profile/>}></Route>
  
  </Routes></BrowserRouter>

    
    </Provider>
  </React.StrictMode>,
)
