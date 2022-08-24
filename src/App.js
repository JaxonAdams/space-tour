import './App.css';
import { Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Destination from './pages/Destination';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/space-tour' element={<Home />} />
        <Route path='/space-tour/destination' element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;
