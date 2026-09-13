import { Routes, Route, NavLink } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/movies">Movies</NavLink> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/movies" element={}></Route> */}
      </Routes>
    </>
  )
}

export default App
