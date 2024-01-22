import "./App.css";
import SearchBar from "./components/SearchBar";


function App() {
  return (
    <div className="App">
      <div className="w-full h-full bg-center bg-cover bg-as pb-10 md:pb-0 md:h-screen">
      <div className="p-4 ml-5">
        <span class="text-black text-5xl font-normal greatvibes">L</span>
        <span class="text-black text-2xl font-normal poppins">yricity</span>
      </div>
      <SearchBar />

    </div>
    </div>
  );
}

export default App;
