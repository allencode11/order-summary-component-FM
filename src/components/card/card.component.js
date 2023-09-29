import image from "../../static/media/illustration-hero.svg";
import SummaryComponent from "../summary/summary.component";
import SubscriptionComponent from "../subscription/subscription.component";
import DarkBtnComponent from "../dark-btn/dark-btn.component";
import "./card.component.css"
function CardComponent()  {
  return (
    <div className="card card-size">
      <img className="card-size" src={image} alt="ilustration"/>
      <SummaryComponent></SummaryComponent>

      <SubscriptionComponent></SubscriptionComponent>
      <DarkBtnComponent></DarkBtnComponent>
      <div className="light-btn">Cancel Order</div>
    </div>
  );
}

export default CardComponent