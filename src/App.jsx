import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './Components/Navbar.jsx';
import Textform from './Components/Textform';
import About from './Components/About';   // ✅ fixed import
import { HashRouter, Routes, Route } from 'react-router-dom';
import Alert from './Components/Alert';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Navbar /> {/* ✅ Keep Navbar outside 
        Routes */}
        <Alert alert="Welcome to Website. You can do Writing with Fun" />

        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Textform heading="Enter the Text to analyze"/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;

