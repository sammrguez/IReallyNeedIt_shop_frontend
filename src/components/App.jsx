import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <div className='page'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
