import "./App.css";
import SearchBar from "./components/SearchBar";


function App() {
  return (
    <div className="App">
      <div className="w-full h-full pb-10 bg-[#8dd7ff] md:pb-0 md:h-screen">
      <div className="text-3xl p-4 ml-5">Lyrics</div>
      <SearchBar />

    </div>
    </div>
  );
}

export default App;
