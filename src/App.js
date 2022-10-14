import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Main from './component/main/Main';
import NavHeader from './component/navigation_heading/NavHeader';
import PlaceToStay from './component/place_to_stay/PlaceToStay';

function App() {
  return (
    <>
      <NavHeader />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/place" element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
