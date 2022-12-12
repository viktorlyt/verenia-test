import Rectangle_6 from "./images/Rectangle_6.png";
import logo from "./images/logo.svg";
import MaskGroup from "./images/MaskGroup.png";
import Oval from "./images/Oval.png";
import classNames from "classnames";
import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [record, setRecord] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const BaseUrl =
    "https://run.mocky.io/v3/066f2a99-252b-4744-ae58-17382be9c462";

  useEffect(() => {
    fetch(BaseUrl)
      .then((res) => res.text())
      .then((res) => {
        const data = res
          .replaceAll(/(\w+):\s/g, '"$1": ')
          .replaceAll(/"name": (\w+\d)/g, '"name": "$1"');
        return data;
      })
      .then((res) => JSON.parse(res))
      .then((data) => {
        setItems(data.items);
        setRecord(data.record);
        setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App ">
      {!isLoaded ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
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
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
            </div>
            <div className="Header__Rectangle21 grid__item--3-8"></div>
            <img
              src={MaskGroup}
              className="Header__MaskGroup"
              alt="MaskGroup"
            />
            <img src={Oval} className="Header__oval" alt="Oval" />
          </header>

          <h1 className="title">Quote & Customer Information</h1>

          <div className="data">
            <p>{record.name}</p>
            <p>Customer: {record.customer}</p>
            <p>Date: {record.date}</p>
          </div>

          <section className="table">
            <div className="table__head">
              <div className="table__row grid">
                <p className="table__cell grid__item--2-3">Item</p>
                <p className="table__cell grid__item--5-6"></p>
                <p className="table__cell grid__item--7-8">Quantity</p>
                <p className="table__cell grid__item--9-10">Unit Price</p>
              </div>
            </div>
            {items.map((item) => (
              <div key={item.name}>
                <div className="tbody__desktop">
                  <div
                    className={classNames("table__row1 grid", {
                      "table__row1--selected grid": +item.price.slice(1) < 100,
                    })}
                  >
                    <p className="table__cell table__cell--info grid__item--1-4">
                      <strong className="table__cell--title">
                        {item.name}
                      </strong>
                      <br />
                      <span className="table__cell--p">{item.description}</span>
                    </p>
                    <p className="table__cell table__cell--img grid__item--5-6">
                      <img
                        className="table__cell--img"
                        alt="table__cell--img"
                        src={item.image}
                      ></img>
                    </p>
                    <p className="table__cell table__cell--p grid__item--7-8">
                      {item.quantity}
                    </p>
                    <p className="table__cell table__cell--p grid__item--9-10">
                      {item.price}
                    </p>
                  </div>
                </div>
                <div className="tbody__mobile">
                  <div
                    className={classNames("table__row1 grid", {
                      "table__row1--selected grid": +item.price.slice(1) < 100,
                    })}
                  >
                    <p className="table__cell table__cell--img grid__item--1-5">
                      <img
                        className="table__cell--img"
                        alt="table__cell--img"
                        src={item.image}
                      />
                    </p>
                    <div className="grid__item--6-10 info">
                      <p className="table__cell table__cell--info">
                        <strong className="table__cell--title">
                          {item.name}
                        </strong>
                        <br />
                        <span className="table__cell--p">
                          {item.description}
                        </span>
                      </p>
                      <br />
                      <br />
                      <p className="table__cell table__cell--p table__cell--p1">
                        <span className="quantity">Quantity:</span>&nbsp;
                        <span>{item.quantity}</span>
                      </p>
                      <p className="table__cell table__cell--p table__cell--p1">
                        <span className="price">Unit price:</span>&nbsp;
                        <span>{item.price}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
}

export default App;
