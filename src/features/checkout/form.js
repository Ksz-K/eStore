import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import axios from "axios";

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
  const [listCounties, setListCounties] = useState([]);
  const [listCommunities, setListCommunities] = useState([]);
  const [listPlaces, setListPlaces] = useState([]);

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

  const loadCounty = async voivodeship => {
    if (voivodeship !== "") {
      try {
        const res = await axios.get(
          `https://kszk-api.herokuapp.com/api/poland/voivodeship/${voivodeship}`
        );
        const list = res.data.Details;
        setListCounties(list);
      } catch (err) {
        console.log(err);
      }
    } else {
      setListCounties([]);
    }
  };

  const loadCommunity = async county => {
    if (county !== "") {
      try {
        const res = await axios.get(
          `https://kszk-api.herokuapp.com/api/poland/county/${county}`
        );
        const list = res.data.Details;
        setListCommunities(list);
      } catch (err) {
        console.log(err);
      }
    } else {
      setListCommunities([]);
    }
  };

  const loadPlace = async community => {
    if (community !== "") {
      try {
        const res = await axios.get(
          `https://kszk-api.herokuapp.com/api/poland/community/${community}`
        );
        const list = res.data.Details;
        setListPlaces(list);
      } catch (err) {
        console.log(err);
      }
    } else {
      setListPlaces([]);
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
                  onChange={e => loadCounty(e.target.value)}
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
                  onChange={e => loadCommunity(e.target.value)}
                  name="county"
                  component="select"
                >
                  <option value="">Wybierz powiat...</option>
                  {listCounties.map(county => (
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
                  onChange={e => loadPlace(e.target.value)}
                  name="community"
                  component="select"
                >
                  <option value="">Wybierz gminę...</option>
                  {listCommunities.map(community => (
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
                  {listPlaces.map(place => (
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
          <button type="submit">Składam Zamówienie</button>
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
