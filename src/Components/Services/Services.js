import "./Services.css";
import solutionMain from "../../Assets/solution-image-bg.png";
import solutionBottomMobile from "../../Assets/solution-image-icon-one.png";
import solutionBottomDesktop from "../../Assets/solution-image-icon-one-lg.png";
import solutionTopMobile from "../../Assets/solution-image-icon-two.png";
import solutionTopDesktop from "../../Assets/solution-image-icon-two-lg.png";

const Services = () => {
  const mobile = window.innerWidth < 768 ? true : false;

  return (
    <div className="services" id="services">
      <div className="services-image">
        <img src={solutionMain} alt="service-main" />
        <div className="top-s">
          {mobile === true ? (
            <img src={solutionTopMobile} alt="top-service" />
          ) : (
            <img src={solutionTopDesktop} alt="top-service" />
          )}
        </div>
        <div className="bottom-s">
          {mobile === true ? (
            <img src={solutionBottomMobile} alt="bottom-service" />
          ) : (
            <img src={solutionBottomDesktop} alt="bottom-service" />
          )}
        </div>
      </div>
      <div className="services-text">
        <h3>
          Acá puede ir tu propuesta para solucionar el punto de dolor de tu
          cliente
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          suscipit ipsam sequi ab deleniti, quasi nobis quas totam dolore,
          itaque sunt facere rem atque enim a illo!
        </p>
        <button className="btn btn-services">Enroll now</button>
      </div>
    </div>
  );
};

export default Services;
