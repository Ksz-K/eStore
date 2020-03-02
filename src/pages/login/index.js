import React, { Fragment } from "react";

const Login = () => {
  return (
    <Fragment>
      <h1 className="large text-primary">Zaloguj się (wkrótce)</h1>
      <p className="lead">
        <i className="fa fa-key"></i> Użyj danych utworzonego konta bądź Numeru
        Zamówienia
      </p>
      <form className="form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Adres e-mail"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Hasło/Nr Zamówienia"
            name="password"
            minLength="6"
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </Fragment>
  );
};

export default Login;
