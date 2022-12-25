

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cards from './components/Cards';
function App() {
  
    return (
      <div>
    
      
      
      
      
      <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail/>} />
      
      </Routes>
      <Cards/>
    </BrowserRouter>
      
      </div>
    )
  ;
}

export default App;
