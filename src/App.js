import './App.css';
// import BodyEdubay from './Components/Dashboard';
import RequestList from './Components/RequestList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Heading from './Components/Heading';

import DetailsIntitution from './SingleComponent/DetailsIntitution';
import SignlePerson from './Components/SignlePerson';
function App() {
  return (
    <BrowserRouter>
      {/* <Heading /> */}
      <Routes>
        <Route path="/" element={<Heading />}>
          <Route index element={<Dashboard />} />
          <Route path="requestList" element={<RequestList />} />
          <Route path="/requestList/:id" element={<SignlePerson />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <BodyEdubay />
    // </div>
  );
}

export default App;
