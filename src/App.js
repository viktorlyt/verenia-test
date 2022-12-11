import Rectangle_6 from "./images/Rectangle_6.png";
import logo from "./images/logo.svg";
import MaskGroup from "./images/MaskGroup.png";
import Oval from "./images/Oval.png";
import tel from "./images/image.png";
import "./App.scss";

function App() {
  return (
    <div className="App ">
      <header className="Header grid">
        <img src={logo} className="Header__logo" alt="logo" />
        <img
          src={Rectangle_6}
          className="Header__Rectangle6 grid__item--1-10"
          alt="Rectangle_6"
        />
        <div className="Header__text grid__item--3-8">
          <h1 className="Header__text-h1">
            We are pleased to quote you the following products:
          </h1>
          <p className="Header__text-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>
        <div className="Header__Rectangle21 grid__item--3-8"></div>
        <img src={MaskGroup} className="Header__MaskGroup" alt="MaskGroup" />
        <img src={Oval} className="Header__oval" alt="Oval" />
      </header>

      <h1 className="title">Quote & Customer Information</h1>

      <div className="data">
        <p>Q000000034</p>
        <p>Customer: #1648</p>
        <p>Date: 20.12.2018</p>
      </div>

      <table className="table">
        <thead className="table__head">
          <tr className="table__row grid">
            <th className="table__cell grid__item--2-3">Item</th>
            <th className="table__cell grid__item--5-6"></th>
            <th className="table__cell grid__item--7-8">Quantity</th>
            <th className="table__cell grid__item--9-10">Unit Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table__row1 grid">
            <td className="table__cell table__cell--info grid__item--1-4">
              <strong className="table__cell--title">
                Panasonic 5500D Phone
              </strong>
              <p className="table__cell--p">
                A great phone with 24 programmable feature buttons
              </p>
            </td>
            <td className="table__cell table__cell--img grid__item--5-6">
              <img className="table__cell--img" alt="" src={tel}></img>
            </td>
            <td className="table__cell table__cell--p grid__item--7-8">
              1
            </td>
            <td className="table__cell table__cell--p grid__item--9-10">
              $1309
            </td>
          </tr>
        </tbody>
        <tbody className="tbody__mobile">
          <tr className="table__row1 grid">
            <td className="table__cell table__cell--info grid__item--2-3">
              <strong className="table__cell--title">
                Panasonic 5500D Phone
              </strong>
              <p className="table__cell--p">
                A great phone with 24 programmable feature buttons
              </p>
            </td>
            <td className="table__cell table__cell--img grid__item--5-6">
              <img className="" alt="" src={tel}></img>
            </td>
            <td className="table__cell table__cell--p table__cell--p1 grid__item--7-8">
              <p className="quantity">Quantity:</p>&nbsp;
              <p>1</p>
            </td>
            <td className="table__cell table__cell--p table__cell--p1 grid__item--9-10">
              <p className="price">Unit price:</p>&nbsp;
              <p>$1309</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
