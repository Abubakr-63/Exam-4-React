import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header count={count}/>
      <Outlet context={{count, setCount}}/>
      <Footer/>
    </>
  )
}
