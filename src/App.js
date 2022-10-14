import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Main from './component/main/Main';
import NavHeader from './component/navigation_heading/NavHeader';

function App() {
  return (
    <>
      <NavHeader />
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
