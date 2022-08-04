import "./Brand.css";
import brandMobile from "../../Assets/image-brand-sm.png";
import brandTopMobile from "../../Assets/logo-sup-brand.png";
import brandBottomMobile from "../../Assets/logo-inf-brand.png";
import brandDesktop from "../../Assets/image-brand-lg.png";
import brandTopDesktop from "../../Assets/logo-sup-brand-lg.png";
import brandBottomDesktop from "../../Assets/logo-inf-brand-lg.png";

const Brand = () => {
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <div className="brand" id="brand">
      <div className="brand-image">
        {mobile === true ? (
          <img src={brandMobile} alt="brand" />
        ) : (
          <img src={brandDesktop} alt="brand" />
        )}
        {mobile === true ? (
          <img src={brandTopMobile} alt="brand" />
        ) : (
          <img src={brandTopDesktop} alt="brand" />
        )}
        {mobile === true ? (
          <img src={brandBottomMobile} alt="brand" />
        ) : (
          <img src={brandBottomDesktop} alt="brand" />
        )}
      </div>
      <div className="brand-text">
        <h4>HI! Nice to meet you. Im Olivia. </h4>
        <h2>
          Marketing Expert and Business Coach here to help you take things to
          the next level.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          suscipit ipsam sequi ab deleniti, quasi nobis quas totam dolore,
          magnam perferendis itaque sunt facere rem atque enim a illo!
        </p>
        <ul>
          <li>Senior Designer</li>
          <li>Photographer</li>
          <li>Adventure</li>
        </ul>
      </div>
    </div>
  );
};

export default Brand;
