import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from "./components/Main"
import Footer from "./components/Footer"
import TitleCard from "./components/TitleCard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TitleCard />
      <Main />
      <Footer />
    </div>
  )
}

export default App
