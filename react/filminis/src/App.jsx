import MovieList from "./components/MovieList"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./App.css"
import Movie from "./components/Movie";
import Login from "./components/login/login"
import { useState } from "react";


function App() {

  const [token, setToken] = useState(null)
  const [role, setRole] = useState(null)

  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <Link to='/'>
            <h1>Cinelist</h1>
          </Link>
          <p>Seu catálogo de filmes favoritos.</p>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/filme" element={<Movie />} />
          <Route path="/login" element={<Login setRole={setRole} setToken={setToken} />} />
        </Routes>

      </div>
    </BrowserRouter>

  )
}

export default App;