import './App.css';
import Benefits from './Components/Benefits/Benefits';
import Home from './Components/Home/Home';
import Problems from './Components/Problems/Problems';
import Services from './Components/Services/Services';

const App = () => {
  return (
    <div>
      <Home />
      <Problems />
      <Services />
      <Benefits />
    </div>
  );
}

export default App;
