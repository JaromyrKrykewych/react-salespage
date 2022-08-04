import "./Benefits.css";

const BenefitDesktop = ({ benefits }) => {
  return (
    <div className="grid-benefits">
      <div className="benefit-title">
        <h2>Here's what we can do together</h2>
      </div>
      {benefits.map((benefit, idx) => {
        return (
          <div className="benefit" key={idx}>
            <img src={benefit.image} alt={`pic-${idx}`} />
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BenefitDesktop;
