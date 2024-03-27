import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import NavBar from './NavBar';
import Footer from './Footer';
import Products from './Products';
import PopupProduct from './PopupProduct';
import Cart from './Cart';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/carrito' element={<Cart />} />
      </Routes>
      <Footer />
      <PopupProduct />
    </>
  );
}

export default App;
