import Tilt from 'react-parallax-tilt';
import brain from "./brain.png"
import "./Logo.css";

const Logo = () => {

  return(
    <div className='Logo ma4 mt0'>
      <Tilt className='Tilt br2 shadow-2' glareEnable={true} gyroscope={true}>
        <div>
          <img src={brain} alt='logo' />
        </div>
      </Tilt>
      </div>
  )
}

export default Logo