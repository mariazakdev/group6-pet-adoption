import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PetProfilePage from './pages/PetProfilePage';




function App() {



  return (
    <body>
      <BrowserRouter>
        <NavComp/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/pet/:id" element={<PetProfilePage />}/>
          <Route path="*" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
 



    </body>
  );

}

export default App;
