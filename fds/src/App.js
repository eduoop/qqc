import './App.css';
import About from './components/pages/About';
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
