import "./FaceRecognition.css"

const FaceRecognition = ({imageUrl, boxList}) => {
  const faceBoxes = boxList.map( (box, index) => {
    return  <div key={index} className="face-box" style={{top:box.top, bottom:box.bottom, left:box.left, right:box.right}}></div>
  })
  return(
    <div className="center ma">
      <div className="absolute mt2">
        <img id="face-recognise-img" alt="" src={imageUrl} width='500px' height="auto"/>
        {faceBoxes}
      </div>
    </div>
  )
}

export default FaceRecognition