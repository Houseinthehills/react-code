import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home';
import Nav from './components/nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <Nav />
              <Routes>
                <Route index path='/' element={<HomePage />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;