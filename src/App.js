import { Route, Routes } from 'react-router-dom';
import Main from './component/main/Main';
import NavHeader from './component/navigation_heading/NavHeader';

function App() {
  return (
    <>
      <NavHeader />
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
