
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="banner">
        <div className="navbar">
          <img src="/buttonhover/src/assets/images/blue-logo.png" alt="Blue logo" className="logo"/>
          <ul>
            <li><a href="home.js">Home</a></li>
            <li><a href="bedroom.js">Bedroom</a></li>
            <li><a href="dining.js">Dining</a></li>
            <li><a href="kitchen.js">Kitchen</a></li>
            <li><a href="backyard.js">Backyard</a></li>
          </ul>
        </div>

        <div className="content">
          <h1>DESIGN YOUR HOUSE</h1>
          <p>Subscribe Easy Tutorials YouTub Channel to watch more videos, <br/>press the bell icon to get latest updates.</p>
          <div>
            <button type="button"><span></span>WATCH MORE</button>
            <button type="button"><span></span>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
