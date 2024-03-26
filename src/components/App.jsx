import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import NavBar from './NavBar';
import Header from './Header';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
