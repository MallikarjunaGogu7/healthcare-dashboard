
import humanImage from "../assets/human-body.jpg"
const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <img src={humanImage} alt="Human Anatomy" />
      <div className="status heart">
        <i className="fas fa-heart"></i> Healthy Heart
      </div>
      <div className="status leg">
        <i className="fas fa-running"></i> Healthy Leg
      </div>
    </div>
  )
}

export default AnatomySection