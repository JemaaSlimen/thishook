import './App.css';
import { Data } from './movieData';
import {useState} from 'react'
import Movielist from './component/Movielist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './component/Search';
import Addmovie from './component/Addmovie';
function App() {

  const [movies, setMovies] = useState(Data)
  const handelAdd=(newMovie) => {
    setMovies([...movies,newMovie])
  }
  return (
    <div className="App">
      <Search/>
      <Movielist   films={movies} />
      <Addmovie handelAdd={handelAdd}/>
    </div>
  );
}

export default App;
