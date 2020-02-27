import React from "react";

const CurrentDay = () => {
  const date = new Date();
  const day = date.getDay();
  const dayofmonth = date.getDate();
  const month = date.getMonth();

  const childrensday = new Date(2020, 5, 1);
  const timeleft = parseInt((childrensday - date) / 86400 / 1000);
  let day4www;
  let month4www;

  switch (day) {
    case 1:
      day4www = "w poniedziałek";
      break;
    case 2:
      day4www = "we wtorek";
      break;
    case 3:
      day4www = "w środę";
      break;
    case 4:
      day4www = "w czwartek";
      break;
    case 5:
      day4www = "w piątek";
      break;
    case 6:
      day4www = "w sobotę";
      break;
    case 0:
      day4www = "w niedzielę";
      break;
    default:
      break;
  }
  switch (month) {
    case 0:
      month4www = "stycznia";
      break;
    case 1:
      month4www = "lutego";
      break;
    case 2:
      month4www = "marca";
      break;
    case 3:
      month4www = "kwietnia";
      break;
    case 4:
      month4www = "maja";
      break;
    case 5:
      month4www = "czerwca";
      break;
    case 6:
      month4www = "lipca";
      break;
    case 7:
      month4www = "sierpnia";
      break;
    case 8:
      month4www = "września";
      break;
    case 9:
      month4www = "października";
      break;
    case 10:
      month4www = "listopada";
      break;
    case 11:
      month4www = "grudnia";
      break;
    default:
      break;
  }

  return (
    <div className="text-center bg-toy">
      <h1>
        Witamy {day4www} {dayofmonth}. {month4www}
      </h1>
      <p className="lead m-0">
        Do Dnia Dziecka pozostało jedynie {timeleft} dni
      </p>
      <h2>Dziś POLECAMY</h2>
    </div>
  );
};
export default CurrentDay;
