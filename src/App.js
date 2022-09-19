import './App.css';
import BodyEdubay from './Components/BodyEdubay';
import RequestList from './Components/RequestList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<BodyEdubay />} />
          <Route path="requestList" element={<RequestList />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <BodyEdubay />
    // </div>
  );
}

export default App;
