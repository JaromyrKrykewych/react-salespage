import "./Foda.css";
import check from "../../Assets/foda-check.png";
import error from "../../Assets/foda-error.png";
import fodaMobile from "../../Assets/foda-bg.png";
import fodaDesktop from "../../Assets/foda-bg-lg.png";

const FodaCard = ({title, image, mobile}) => {
  return (
    <>
      {
        mobile === true ? (
          <h2>{title}</h2>
        ) : null
      }
      <div className="card-info">
        {
          mobile === false ? (
            <h2>{title}</h2>
          ) : null
        }
        <ul>
          <li>
            <div>
              <img src={image} alt="list-style" />
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <div>
              <img src={image} alt="list-style" />
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <div>
              <img src={image} alt="list-style" />
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </div>
    </>
  );
};

const Foda = () => {
  const mobile = window.innerWidth < 768 ? true : false;

  return (
    <div className="foda">
      {mobile === true ? (
        <img src={fodaMobile} alt="bg" />
      ) : (
        <img src={fodaDesktop} alt="bg" />
      )}
      <div className="foda-card">
        <FodaCard title='This is for you if...' image={check} mobile={mobile}/>
        <FodaCard title='This is not for you if...' image={error} mobile={mobile}/>
      </div>
    </div>
  );
};

export default Foda;
