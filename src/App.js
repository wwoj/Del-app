import logo from "./logo.svg";
import "./App.css";
import MoviesContainer from "./app/movies/components/MoviesContainer";
import MoviesForm from "./app/movies/components/MoviesForm";
function App() {
  return (
    <div className="App">
      <MoviesForm />
      <MoviesContainer />
    </div>
  );
}

export default App;
