import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Details from "./views/Details"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <main className="flex justify-center">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<Details />}></Route>
        </Routes>
      </main>
    </Router>
  )
}

export default App
