import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserProvider } from './context/UserContext'


function App() {


  return (
    <>
    <UserProvider>
    <AppRoutes/>
    </UserProvider>
    </>
  )
}

export default App
