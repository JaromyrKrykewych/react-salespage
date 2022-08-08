import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./Comments.css";
import star from "../../Assets/star.png";
import halfStar from "../../Assets/no-star.png";
import { comments } from "../../Data/Data";

import Slider from "react-slick";

const Comments = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
    ],
  };

  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <div className="comments">
      <div className="comments-title">
        <h2>What They're Saying</h2>
      </div>
      <div className="comments-slider">
        <Slider {...settings}>
          {comments.map((comment, idx) => {
            return (
              <div className="comment" key={idx}>
                {mobile === false ? <div className="span"></div> : null}
                <img src={comment.image} alt={`pic-${idx + 1}`} />
                <h3>{comment.name}</h3>
                <p>{comment.message}</p>
                <div className="ponder">
                  <h4>Calification</h4>
                  <ul>
                    <li>
                      <img src={star} alt="ponder" />
                    </li>
                    <li>
                      <img src={star} alt="ponder" />
                    </li>
                    <li>
                      <img src={star} alt="ponder" />
                    </li>
                    <li>
                      <img src={star} alt="ponder" />
                    </li>
                    <li>
                      <img src={halfStar} alt="ponder" />
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Comments;
