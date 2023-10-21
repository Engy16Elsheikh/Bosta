
import Navbars from './components/Navbar/navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';
import Details from './pages/Details/details';

function App() {
  return(
    <BrowserRouter>
      <div>
      <Navbars/>
        <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/details" element={<Details/>}/>
        </Routes>
          
      </div>

    </BrowserRouter>
   
  );

}

export default App;
