import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./Problems.css";
import { pains } from "../../Data/Data";
import Slider from "react-slick";

const Problems = () => {
  const settings = {
    className: "center",
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 0,
    speed: 500,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          className: "center",
          dots: true,
          arrows: false,
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500
        }
      }
    ]
  };

  const mobile = window.innerWidth < 768 ? true : false;
  
  return (
    <div className="problems">
      <h3>¿Cómo te puedo ayudar?</h3>
      <h4>TELL ME I'M WRONG AND YOU AREN'T FEELING</h4>
      <div className="pains">
        <Slider {...settings}>
          {pains.map((pain, idx) => {
            return (
              <div className="pain" key={idx}>
                <img src={pain.image} alt={`pic-${idx}`} />
                <h2>{pain.title}</h2>
                <p>{pain.text}</p>
              </div>
            );
          })}
        </Slider>
      </div>
      {
        mobile === false ? (
        <div className="problem-aside" style={{top:`${256}px`}}>
          <div></div>
        </div>
        ) : null
      }
    </div>
  );
};

export default Problems;
