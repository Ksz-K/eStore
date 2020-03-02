import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import axios from "axios";

const required = value => (value ? undefined : "Required");
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters` : undefined;
const minLength2 = minLength(2);

const initialValues = {
  country: "Polska"
};

const voivodeships = [
  "dolnośląskie",
  "kujawsko-pomorskie",
  "lubelskie",
  "lubuskie",
  "mazowieckie",
  "małopolskie",
  "opolskie",
  "podkarpackie",
  "podlaskie",
  "pomorskie",
  "voivodeship",
  "warmińsko-mazurskie",
  "wielkopolskie",
  "województwo",
  "zachodniopomorskie",
  "łódzkie",
  "śląskie",
  "świętokrzyskie"
];

let CheckoutForm = ({ countryValue, handleSubmit }) => {
  const [listCountries, setListCountries] = useState(["Polska"]);

  const [geoDetails, setGeoDetails] = useState({
    counties: [],
    communities: [],
    places: []
  });

  const loadCountries = async () => {
    try {
      const res = await axios.get(
        `https://kszk-api.herokuapp.com/api/countries`
      );
      const list = res.data.map(country => country.name);
      setListCountries(list);
    } catch (err) {
      console.log(err);
    }
  };

  const loadGeo = async (areaGeo, areaName) => {
    let geoList;
    switch (areaGeo) {
      case "voivodeship":
        geoList = "counties";
        break;
      case "county":
        geoList = "communities";
        break;
      case "community":
        geoList = "places";
        break;
      default:
        geoList = "dddddddd";
        break;
    }
    if (areaName !== "") {
      try {
        const res = await axios.get(
          `https://kszk-api.herokuapp.com/api/poland/${areaGeo}/${areaName}`
        );
        const list = res.data.Details;
        setGeoDetails({ ...geoDetails, [geoList]: list });
      } catch (err) {
        console.log(err);
      }
    } else {
      setGeoDetails({ ...geoDetails, [geoList]: [] });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <Field
              name="name"
              component="input"
              type="text"
              validate={[required, minLength2]}
              placeholder="First Name"
              onChange={() => loadCountries()}
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field
              name="lastName"
              component="input"
              type="text"
              validate={[required, minLength2]}
              placeholder="Last Name"
            />
          </div>
        </div>

        <div>
          <label>e-mail</label>
          <div>
            <Field
              name="email"
              component="input"
              type="email"
              validate={email}
              placeholder="e-mail"
            />
          </div>
        </div>
        <div>
          <label>Kraj</label>
          <div>
            <Field name="country" component="select">
              <option value="">Wybierz kraj...</option>
              {listCountries.map(country => (
                <option value={country} key={country}>
                  {country}
                </option>
              ))}
            </Field>
          </div>
        </div>
        {countryValue === "Polska" ? (
          <Fragment>
            <div>
              <label>Województwo</label>
              <div>
                <Field
                  onChange={e => loadGeo(e.target.name, e.target.value)}
                  name="voivodeship"
                  component="select"
                >
                  <option value="">Wybierz województwo...</option>
                  {voivodeships.map(voivodeship => (
                    <option value={voivodeship} key={voivodeship}>
                      {voivodeship}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
            <div>
              <label>Powiat</label>
              <div>
                <Field
                  onChange={e => loadGeo(e.target.name, e.target.value)}
                  name="county"
                  component="select"
                >
                  <option value="">Wybierz powiat...</option>
                  {geoDetails.counties.map(county => (
                    <option value={county} key={county}>
                      {county}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
            <div>
              <label>Gmina</label>
              <div>
                <Field
                  onChange={e => loadGeo(e.target.name, e.target.value)}
                  name="community"
                  component="select"
                >
                  <option value="">Wybierz gminę...</option>
                  {geoDetails.communities.map(community => (
                    <option value={community} key={community}>
                      {community}
                    </option>
                  ))}
                </Field>
              </div>
            </div>

            <div>
              <label>Miejscowość</label>
              <div>
                <Field name="place" component="select">
                  <option value="">Wybierz miejscowość...</option>
                  {geoDetails.places.map(place => (
                    <option value={place} key={place}>
                      {place}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
          </Fragment>
        ) : (
          <div>
            <label>Miejscowość</label>
            <div>
              <Field
                name="foreignPlace"
                component="input"
                type="text"
                validate={[required, minLength2]}
                placeholder="Miejscowość"
              />
            </div>
          </div>
        )}

        <div>
          <label>ulica</label>
          <div>
            <Field
              name="street"
              component="input"
              type="text"
              placeholder="ulica"
            />
          </div>
        </div>

        <div>
          <label>Numer domu</label>
          <div>
            <Field
              name="houseNo"
              component="input"
              type="text"
              placeholder="Numer domu"
            />
          </div>
        </div>
        <div>
          <label>Numer mieszkania</label>
          <div>
            <Field
              name="flatNo"
              component="input"
              type="text"
              placeholder="Numer mieszkania"
            />
          </div>
        </div>

        <div>
          <button className="mt-2 btn btn-success btn-sm" type="submit">
            Składam Zamówienie
          </button>
        </div>
      </form>
    </div>
  );
};

CheckoutForm = reduxForm({
  form: "checkout",
  initialValues
})(CheckoutForm);

const selector = formValueSelector("checkout"); // <-- same as form name
CheckoutForm = connect(state => {
  const countryValue = selector(state, "country");

  return {
    countryValue
  };
})(CheckoutForm);

export default CheckoutForm;
