import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchHidden } from "../pages/navigation/duck/actions";

const Contact = ({ searchHidden }) => {
  useEffect(() => {
    searchHidden();
  }, []);

  return (
    <div
      id="contactDeatails"
      className="bg-grey carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#contactDeatails"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#contactDeatails" data-slide-to="1"></li>
        <li data-target="#contactDeatails" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="img/www.jpg"
            className="d-block w-100 min-vh-81p4"
            alt="www"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Nasz adres to Świat Wirtualny</h1>
            <p className=" lead">
              Mieścimy się w Twoim komputerze, laptopie, tablecie, telefonie...
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="img/globe.jpg"
            className="d-block w-100 min-vh-81p4"
            alt="Earth"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Dzięki temu jesteśmy zawsze dostępni</h1>
            <p className=" lead">
              Na całym świecie, na każdym kontynencie, w każdej strefie
              czasowej...
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="img/milky.jpg"
            className="d-block w-100 min-vh-81p4"
            alt="Universe"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Napisz: store@stronaszkoleniowa.store</h1>
            <p className=" lead">
              Odwiedź naszą witrynę https://stronaszkoleniowa.store
            </p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#contactDeatails"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#contactDeatails"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default connect(null, { searchHidden })(Contact);
