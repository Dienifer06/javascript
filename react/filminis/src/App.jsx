import MoveList from "./components/MovieList";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";


function App() {
  return(
  <BrowserRouter>
  <div className="container">
      <header>
        <h1>Movie Storm</h1>
        <p>Seu catalágo</p>
      </header>
      
        <Routes>
          <Route path="/" element={<MoveList />} />
          <Route path="/filme" element={<Movie />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
  

}


export default App;