import "./Benefits.css";
import { motion } from "framer-motion";
/* motion no me ha funcionado jaja */
const BenefitDesktop = ({ benefits }) => {

  return (
    <div className="grid-benefits">
      <div className="benefit-title">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{opacity: 0, y: 100}}
          transition={{ type: 'spring', duration: 3, delay: 0 }}
        >
          Here's what we can do together
        </motion.h2>
      </div>
      {benefits.map((benefit, idx) => {
        return (
          <motion.div
            className="benefit"
            key={idx}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{opacity: 0, y: 100}}
            transition={{ type: 'spring', duration: 3, delay: `0.5 * ${idx + 1}` }}
          >
            <img src={benefit.image} alt={`pic-${idx}`} />
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BenefitDesktop;
