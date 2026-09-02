import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer'

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
