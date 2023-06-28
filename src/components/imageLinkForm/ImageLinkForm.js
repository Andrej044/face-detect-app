// import Tilt from 'react-parallax-tilt';

const ImageLinkForm = () => {

  return(
    <div>
      <p className='f3'>
        {`This Magic Brain will detect faces in your pictures. Get it a try`}
      </p>
      <div className="center">
        <input className="f4 pa2 w-70 center" type="text"/>
        <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
      </div>
    </div>
  )
}

export default ImageLinkForm