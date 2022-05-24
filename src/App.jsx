import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Details from "./views/Details"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Details />}></Route>
      </Routes>
    </Router>
  )
}

export default App
