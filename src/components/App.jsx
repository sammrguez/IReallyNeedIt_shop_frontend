import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import NavBar from './NavBar';
import Footer from './Footer';
import Products from './Products';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/productos' element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
