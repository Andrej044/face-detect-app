import Tilt from 'react-parallax-tilt';
import brain from "./brain.png"
import "./Logo.css";

const Logo = () => {

  return(
    <div className='Logo ma4 absolute top--1 left--1'>
      <Tilt className='Tilt br2 shadow-2' glareEnable={true} gyroscope={true} scale={1.1}>
        <div>
          <img src={brain} alt='logo' />
        </div>
      </Tilt>
      </div>
  )
}

export default Logo