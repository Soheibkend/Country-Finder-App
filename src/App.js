import Home from './pages/Home';
import Details from './pages/Details';
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>

     <div className="App"></div>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/countries/:name" element={<Details/>}/>
     </Routes>
    </HashRouter>
    
  );
}

export default App;
