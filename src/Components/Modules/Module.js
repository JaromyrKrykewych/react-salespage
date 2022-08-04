import "./Modules.css";
import listStyle from '../../Assets/list-style-modules.png'

const Module = ({title , imageMobile, imageDesktop}) => {
  const mobile = window.innerWidth<768 ? true : false
  return (
    <div className="module">
      <div className="module-text">
        {
          mobile === false ? (
            <span>{title}</span>
          ) : null
        }
        <h3>Module title goes here</h3>
        <p>
          Microdosing chambray kitsch mustache. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Vel rerum atque, nemo magni totam
          necessitatibus. Consectetur, adipisicing elit.
        </p>
        <ul>
          <li>
            <img src={listStyle} alt="list-syle" />
            <span> High Quality Videos Details</span>
          </li>
          <li>
            <img src={listStyle} alt="list-syle" />
            <span> High Quality Videos Details</span>
          </li>
        </ul>
        <button className="btn btn-module">VIEW MODULE!</button>
      </div>
      <div className="module-image">
        {
          mobile === true ? (
            <img src={imageMobile} alt="module" />
          ) : (
            <img src={imageDesktop} alt="module" />
          )
        }
        {
          mobile === true ? (
            <div>
              <h2>{title}</h2>
            </div>
          ) : null
        }
      </div>
    </div>
  );
};

export default Module