import MovieList from "./components/MovieList"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./App.css"
import Movie from "./components/Movie";
import Login from "./components/login/login"
import { useEffect, useState } from "react";


function App() {

  const [token, setToken] = useState(null)
  const [role, setRole] = useState(null)

  useEffect(() =>{
    const tokenSalvo = localStorage.getItem("access_token")
    const roleSalvo = localStorage.getItem("user_role")

    if (tokenSalvo && roleSalvo){
      console.log("entremo")
      setToken(tokenSalvo)
      setRole(roleSalvo)
    }
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    setToken(null)
    setRole(null)
  }



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
          <button onClick={handleLogout}>logout</button>
        </header>
       


        <Routes>

          {token ? (
            <>
            <Route path="/" element={<MovieList />} />
            <Route path="/filme" element={<Movie />} />
            <Route path="/login" element={<Login setRole={setRole} setToken={setToken} />} /> 
            </>
          ) : (
            <>
            <Route path="/" element={<MovieList />} />
            <Route path="/login" element={<Login setRole={setRole} setToken={setToken} />} />
            </>
          )}
        </Routes>



      </div>


    </BrowserRouter>

  )
}

export default App;