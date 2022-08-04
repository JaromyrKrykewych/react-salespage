import "./Home.css";
import bigHomeMobile from "../../Assets/home-image-bg-sm.png";
import bigHomeDesktop from "../../Assets/home-image-bg-lg.png";
import smallHomeMobile from "../../Assets/home-image-translate-sm.png";
import smallHomeDesktop from "../../Assets/home-image-translate-lg.png";
import homeScroll from '../../Assets/home-scroll.png'
import Header from "../Header/Header";

const Home = () => {
  const mobile = window.innerWidth <= 767 ? true : false;
  return (
    <div className="home">
      <Header />
      {mobile === false ? (
        <div className="aside">
          <div></div>
        </div>
      ) : null}
      <div className="home-main">
        <div className="info-text">
          <h2>Título de tu curso o programa.</h2>
          <h3>
            Acá puede ir una frase impactante que te represente a ti o a tu
            trabajo
          </h3>
          <p>
            Now all set. We can present all frame that we already create by
            click play button on the top right corner.
          </p>
          <button className="btn btn-home">Sign me up!</button>
        </div>
        <div className="info-image">
          {mobile === true ? (
            <img src={bigHomeMobile} alt="home-pic" />
          ) : (
            <img src={bigHomeDesktop} alt="home-pic" />
          )}
          {mobile === true ? (
            <img src={smallHomeMobile} alt="home-pic" />
          ) : (
            <img src={smallHomeDesktop} alt="home-pic" />
          )}
        </div>
      </div>
      <div className="home-scroll">
        <img src={homeScroll} alt='scroll'/>
        Scroll Down
      </div>
    </div>
  );
};

export default Home;
