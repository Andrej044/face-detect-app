import "./FaceRecognition.css"

const FaceRecognition = ({imageUrl, box}) => {

  return(
    <div className="center ma">
      <div className="absolute mt2">
        <img id="face-recognise-img" alt="" src={imageUrl} width='500px' height="auto"/>
        <div className="face-box" style={{top:box.top, bottom:box.bottom, left:box.left, right:box.right}}></div>
      </div>
    </div>
  )
}

export default FaceRecognition