
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./componentes/Header"
import VistaPanel from './views/VistaPanel';
import VistaLogin from './views/VistaLogin';
import VistaRegistro from './views/VistaRegistro';

function App() {

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/panel" element={<VistaPanel />} />
        <Route path="/login" element={<VistaLogin />} />
        <Route path="/registro" element={<VistaRegistro />} />
      </Routes>
    </Router>
  )
}

export default App
