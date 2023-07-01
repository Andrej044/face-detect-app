

const FaceRecognition = ({imageUrl, box}) => {

  console.log(box)
  return(
    <div className="center ma">
      <div className="absolute mt2">
        <img id="face-recognise-img" alt="" src={imageUrl} width='500px' height="auto0"/>
      </div>
      <div className="face-box"></div>
    </div>
  )
}

export default FaceRecognition