import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import './Benefits.css'
import Slider from "react-slick";

const BenefitMobile = ({benefits}) => {

  const settings = {
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
  return (
    <>
      <div className="benefit-title">
        <h2>Here's what we can do together</h2>
      </div>
      <Slider {...settings}>
        {
          benefits.map((benefit, idx) => {
            return <div className="benefit" key={idx}>
              <img src={benefit.image} alt={`pic-${idx}`} />
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          })
        }
      </Slider> 
    </>
  )
}

export default BenefitMobile