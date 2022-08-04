import './App.css';
import Benefits from './Components/Benefits/Benefits';
import Home from './Components/Home/Home';
import Modules from './Components/Modules/Modules';
import Problems from './Components/Problems/Problems';
import Services from './Components/Services/Services';

const App = () => {
  return (
    <div>
      <Home />
      <Problems />
      <Services />
      <Benefits />
      <Modules />
    </div>
  );
}

export default App;
