import Rectangle_6 from "./images/Rectangle_6.png";
import logo from "./images/logo.svg";
import MaskGroup from "./images/MaskGroup.png";
import Oval from "./images/Oval.png";
import "./App.scss";

function App() {
  return (
    <div className="App ">
      <header className="App__header grid">
        <img src={logo} className="App__header-logo" alt="logo" />
        <img
          src={Rectangle_6}
          className="App__header-Rectangle_6 grid__item--1-10"
          alt="Rectangle_6"
        />
        <div className="App__header-text grid__item--3-8">
          <h1 className="App__header-text_h1">
            We are pleased to quote you the following products:
          </h1>
          <p className="App__header-text_p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>
        <div className="App__header-Rectangle_21 grid__item--3-8"></div>
        <img
          src={MaskGroup}
          className="App__header-MaskGroup"
          alt="MaskGroup"
        />
        <img src={Oval} className="App__header-Oval" alt="Oval" />
      </header>
    </div>
  );
}

export default App;
