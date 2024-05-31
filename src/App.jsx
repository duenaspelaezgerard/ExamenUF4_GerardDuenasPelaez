import './App.css';
import { GlobalContextProvider } from './context/GlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './componentes/Header';
import { Route, Routes } from 'react-router-dom';
import VistaRegistro from './views/VistaRegistro.jsx';
import VistaLogin from './views/VistaLogin.jsx';
import VistaPanel from './views/VistaPanel.jsx';

export default function App() {

  return (
    <GlobalContextProvider>
      <Header></Header>
      <Routes>
        <Route path='/registro' element={<VistaRegistro/>}/>
        <Route path='/login' element={<VistaLogin/>}/>
        <Route path='/panel' element={<VistaPanel/>}/>
      </Routes>
    </GlobalContextProvider>
  );
}