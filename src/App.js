import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import pages from './pages/pages';
import components from './components/components';
import '../src/styles/Navbar.css';



function App() {
  return (
    <div className="App">
      <Router>
        <components.Navbar/>
        <Routes>
          <Route path="/" element={<pages.Home/>} />
          <Route path="/projects" element={<pages.Projects/>} />
          <Route path="/project/:id" element = {<pages.ProjectDisplay/>} />
          <Route path="/experience" element={<pages.Experience/>} />
        </Routes>
        <components.Footer/>
      </Router>
    </div>
  );
}

export default App;
