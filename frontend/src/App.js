import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import CartScreen from './screens/CartScreen'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main className='py-3 '>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/cart/:id?' element={<CartScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
            </Routes>
            <ToastContainer />
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  )
}

export default App
