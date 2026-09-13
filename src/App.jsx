import { Routes, Route } from "react-router-dom"
import { StyledNav, StyledLink } from "./components/HeaderNav/StyledNav.styled"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import { GlobalStyle } from "./components/GlobalStyle"

function App() {
  return (
    <>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledNav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
      <GlobalStyle />
    </>
  )
}

export default App
