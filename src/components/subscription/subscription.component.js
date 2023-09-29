import image1 from "../../static/media/icon-music.svg";
import "./subscription.component.css"

function SubscriptionComponent() {
  return (
    <div className="subscription">
      <img className="icon" src={image1} alt="music icon"/>
      <div>
        <div>Annual Plan</div>
        <div className="pale-text">$59.99/year</div>
      </div>
      <div className="link-container">
        <a>Change</a>
      </div>
    </div>
  )
}

export default SubscriptionComponent;