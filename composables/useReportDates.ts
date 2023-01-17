import moment from "moment";
const useReportDates = () => {
  const convertDates = (date: string) => {
    console.log(date);
    const datePeriods = ["Q", "H", "FY"];
    const lastPeriod = datePeriods.some((v) => date.includes(v))
      ? `${date[0]}${date[1]}`
      : "";
    const year = datePeriods.some((v) => date.includes(v))
      ? moment(`20${date[2]}${date[3]}`).format("YYYY")
      : moment(date).format("YYYY");
    let month;

    if (date.includes("FY") || date.includes("1H")) {
      month = `01`;
    } else if (date.includes("2H")) {
      month = "06";
    } else if (date.includes("Q")) {
      month = "0" + (parseFloat(date[0]) - 1) * 3;
    }
    if (
      moment(date, "DD MMM YYYY").isValid() ||
      moment(date, "YYYY-MM").isValid()
    ) {
      console.log("is valid date");
      console.log(moment(date).unix());
      return moment(date).unix();
    } else {
      console.log("is NOT a date");
    }
    // console.log("lastPeriod:", lastPeriod);
    // console.log(lastPeriod, year, month);
    // console.log(moment(date).format(`${year}-${month}-01"`));
  };

  return { convertDates };
};

export default useReportDates;
