import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Main from './component/main/Main';
import NavHeader from './component/navigation_heading/NavHeader';
import PlaceToStay from './component/place_to_stay/PlaceToStay';
import CreateWalletModal from './component/pop_models/create_modal/CreateWalletModal';

function App() {
  const [createPopUp, setCreatePopUp] = useState(false);

  const handlePopupShow = () => {
    setCreatePopUp((prevState) => !prevState);
  };
  return (
    <>
      <NavHeader func={handlePopupShow} />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/place" element={<PlaceToStay />} />
      </Routes>
      <Footer />
      {createPopUp && <CreateWalletModal func={handlePopupShow} />}
    </>
  );
}

export default App;
