import { React } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Navbar from './components/NavBar';
import Search from "./components/Search";
import CountryList from "./components/CountryList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element= {<CountryList />} />         
          <Route path="/search/:search" element= {<Search />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
