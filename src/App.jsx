import { useState } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import './App.css'
import Home from "./pages/home";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home />
     <ToastContainer position="top-center" />
    </>
  )
}

export default App
