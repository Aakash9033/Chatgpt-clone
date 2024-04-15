import "./App.css";
import gptlogo from "./assets/chatgpt.svg";
import addbtn from "./assets/add-30.png";
import messageicon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperside">
          <div className="upperside-top">
            <img src={gptlogo} alt="" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midbtn">
            <img src={addbtn} alt="" className="addbtn" />
            New Chat
          </button>
          <div className="upperside-bottom">
            <button className="query">
              <img src={messageicon} alt="" />
              What is Programming
            </button>
            <button className="query">
              <img src={messageicon} alt="" />
              How to use an api
            </button>
          </div>
        </div>
        <div className="lowerside">
          <div className="listitems">
            <img src={home} alt="" className="listitems-img" /> Home
          </div>
          <div className="listitems">
            <img src={saved} alt="" className="listitems-img" /> Saved
          </div>
          <div className="listitems">
            <img src={rocket} alt="" className="listitems-img" /> Upgrade To Pro
          </div>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
