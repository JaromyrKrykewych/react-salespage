import './App.css';
import Benefits from './Components/Benefits/Benefits';
import Brand from './Components/Brand/Brand';
import Comments from './Components/Comments/Comments';
import Foda from './Components/Foda/Foda';
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
      <Comments />
      <Modules />
      <Brand />
      <Foda />
    </div>
  );
}

export default App;
