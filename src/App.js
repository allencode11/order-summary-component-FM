import './App.css';
import image from './static/media/illustration-hero.svg';
import image1 from './static/media/icon-music.svg';

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="card card-size">
          <img className="card-size" src={image} alt="ilustration"/>
          <div className="title">Order Summary</div>
          <div className="plain-text">You can now listen to millions of songs, audiobooks, and podcasts on any devices anywhere you like!</div>

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
          <div className="dark-btn">Proceed to Payment</div>
          <div className="light-btn">Cancel Order</div>

        </div>
      </div>
    </div>
  );
}

export default App;
