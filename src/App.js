import './App.css';
import { Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/space-tour' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
