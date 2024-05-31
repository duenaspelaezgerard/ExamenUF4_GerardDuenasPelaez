
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./componentes/Header"
import VistaPanel from './views/VistaPanel';
import VistaLogin from './views/VistaLogin';
import VistaRegistro from './views/VistaRegistro';
import VistaNouTicket from './views/VistaNouTicket';

function App() {

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<VistaPanel />} />
        <Route path="/login" element={<VistaLogin />} />
        <Route path="/registro" element={<VistaRegistro />} />
        <Route path="/nuevo" element={<VistaNouTicket />} />
      </Routes>
    </Router>
  )
}

export default App
