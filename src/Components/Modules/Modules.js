import "./Modules.css";

import moduleOneMobile from '../../Assets/module-one-image-sm.png'
import moduleTwoMobile from '../../Assets/module-two-image-sm.png'
import moduleThreeMobile from '../../Assets/module-three-image-sm.png'
import moduleOneDesktop from '../../Assets/module-one-image-sm.png'
import moduleTwoDesktop from '../../Assets/module-two-image-sm.png'
import moduleThreeDesktop from '../../Assets/module-three-image-sm.png'

import Module from "./Module";

const Modules = () => {

  return (
    <div className="modules">
      <div className="modules-title">
        <h2>Check Out Whats's Inside Waiting</h2>
      </div>
      <div className="modules-flex">
        <Module title='Module One' imageMobile={moduleOneMobile} imageDesktop={moduleOneDesktop} />
        <Module title='Module Two' imageMobile={moduleTwoMobile} imageDesktop={moduleTwoDesktop}/>
        <Module title='Module Three' imageMobile={moduleThreeMobile} imageDesktop={moduleThreeDesktop} />      
      </div>
    </div>
  );
};

export default Modules;
