import MoveList from "./components/MovieList";
import "./App.css"

function App() {
  return(
  <div className="container">
      <header>
        <h1>filminis</h1>
        <p>seu catalago</p>
      </header>

      <MoveList />
      
  </div>
  )

}


export default App;