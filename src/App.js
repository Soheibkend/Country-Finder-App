import Home from './pages/Home';
import Details from './pages/Details';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

     <div className="App"></div>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/countries/:name" element={<Details/>}/>
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;
