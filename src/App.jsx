import { ContextoGlobalProvider } from './context/ContextoGlobal.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.jsx';
import { Route, Routes } from 'react-router-dom'
import VistaHome from './views/VistaHome.jsx';

function App() {

  return (
    <>
      <ContextoGlobalProvider>
            <Header/>
            <Routes>
                <Route path='/home' element={<VistaHome/>}/>
                {/* <Route path='/juego' element={<Juego/>}/>
                <Route path='/registro' element={<Registro/>}/>
                <Route path='/' element={<Login/>}/>
                <Route path='/ranking' element={<Ranking/>}/> */}
            </Routes>
      </ContextoGlobalProvider>

    
    </>
  );
}

export default App;
