function time() {
  const dt_date1 = new Date("09-09-1995");
  const dt_date2 = new Date();

  const date1_time_stamp = dt_date1.getTime();
  const date2_time_stamp = dt_date2.getTime();

  let calc;

  if (date1_time_stamp > date2_time_stamp) {
    calc = new Date(date1_time_stamp - date2_time_stamp);
  } else {
    calc = new Date(date2_time_stamp - date1_time_stamp);
  }
  const calcFormatTmp =
    calc.getDate() + "-" + (calc.getMonth() + 1) + "-" + calc.getFullYear();
  const calcFormat = calcFormatTmp.split("-");
  const days_passed = Number(Math.abs(calcFormat[0]) - 1);
  const months_passed = Number(Math.abs(calcFormat[1]) - 1);
  const years_passed = Number(Math.abs(calcFormat[2]) - 1970);

  const yrsTxt = ["year", "years"];
  const mnthsTxt = ["month", "months"];
  const daysTxt = ["day", "days"];

  const result =
    (years_passed == 1
      ? years_passed + " " + yrsTxt[0] + " "
      : years_passed > 1
      ? years_passed + " " + yrsTxt[1] + " "
      : "") +
    (months_passed == 1
      ? months_passed + " " + mnthsTxt[0]
      : months_passed > 1
      ? months_passed + " " + mnthsTxt[1] + " "
      : "") +
    (days_passed == 1
      ? days_passed + " " + daysTxt[0]
      : days_passed > 1
      ? days_passed + " " + daysTxt[1]
      : "");

  return result.trim();
}
