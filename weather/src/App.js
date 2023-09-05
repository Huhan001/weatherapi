import './App.css';
import Search from "./compnents/search/search";

function App() {
  const handleonDearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div className="App">
      <Search onsearchChange = {handleonDearchChange} />
    </div>
  );
}

export default App;
