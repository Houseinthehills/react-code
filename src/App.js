import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home';
import Slider from './components/slider';
function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Slider />
          </div>
        </div>
      </div>
      <HomePage />
    </>

  );
}

export default App;
