import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from "./components/header";
import Rockets from './components/rockets';
import Missions from './components/missions';
import MyProfile from './components/myProfile';
import { recieveMissions } from './redux/missions/missions';

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => async () => {
    await dispatch(recieveMissions());
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
