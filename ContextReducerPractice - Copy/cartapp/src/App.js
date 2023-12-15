import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cart from './components/Cart';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
