import { TableHeaderList } from "~/types";

const useTable = () => {
  const tableHeaders: TableHeaderList = [
    { title: "Company Name" },
    { title: "Last report date" },
    { title: "Last report period" },
    { title: "Next report date" },
    { title: "Reporting inferred?" },
  ];

  return { tableHeaders };
};

export default useTable;
