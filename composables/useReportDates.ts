import moment from "moment";
const useReportDates = () => {
  const convertDates = (date: string) => {
    const datePeriods = ["Q", "H", "FY"];

    const year = datePeriods.some((v) => date.includes(v))
      ? moment(`20${date[2]}${date[3]}`).format("YYYY")
      : moment(date).format("YYYY");
    let month;

    if (date.includes("FY") || date.includes("1H")) {
      month = `01`;
    } else if (date.includes("2H")) {
      month = "06";
    } else if (date.includes("Q")) {
      month = "0" + parseFloat(date[0]) * 3;
    }

    let day;
    if (date.length === 4) {
      day = "01";
    }

    if (
      moment(date, "DD MMM YYYY").isValid() ||
      moment(date, "YYYY-MM").isValid()
    ) {
      return moment(date).unix();
    } else {
      return moment(`${year}-${month}-${day}`).unix();
    }
  };

  return { convertDates };
};

export default useReportDates;
