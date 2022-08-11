import Countries from "./components/Countries";
import Filter from "./components/Filter";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Filter/>
     <Countries/>
    </div>
  );
}

export default App;
