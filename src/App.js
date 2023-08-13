 import Navbar from './components/Navbar';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Spinner from './components/Spinner';

function App() {
  return (
    <div className="App">
       <div className="bg-slate-900 -mt-[1em]">
         <Navbar/>
       </div>
       
       <div className="flex justify-center items-center">
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/cart" element={<Cart/>}/>
        </Routes>
       </div>
    </div>
  );
}

export default App;
