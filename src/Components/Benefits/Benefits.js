import './Benefits.css'
import { benefits } from '../../Data/Data'
import BenefitMobile from './BenefitMobile'
import BenefitDesktop from './BenefitDesktop'

const Benefits = () => {

  const mobile = window.innerWidth<767 ? true : false

  return (
    <div className='benefits'>
      {
        mobile === true ? (
          <BenefitMobile benefits={benefits} />
        ) : (
          <BenefitDesktop benefits={benefits} />
        )
      }    
    </div>
  )
}

export default Benefits