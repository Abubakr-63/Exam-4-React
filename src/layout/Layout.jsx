import React, { useState } from 'react'
import { Outlet } from 'react-router'
import axios from 'axios'
import Header from '../components/header'
import Footer from '../components/Footer'
import { idProducts } from '../backend/api'

export default function Layout() {
  const [count, setCount] = useState(0)
  const addToCart = async (product) => {
    try {
      await axios.post(idProducts, product)
      setCount((prev) => prev + 1)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Header count={count}/>
      <Outlet context={{count, setCount, addToCart}}/>
      <Footer/>
    </>
  )
}
