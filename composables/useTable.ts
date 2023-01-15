import { ReportsDataItem, ReportsList, TableHeaderList } from "~/types";
import { ref } from "#build/imports";

const useTable = (rows: ReportsDataItem[], headerColumns: TableHeaderList) => {
  const tableHeaderColumns = headerColumns;

  const tableRows = ref(rows);

  const sortTableBy = (col: string): void => {
    tableRows.value = tableRows.value.reverse();
    console.log(col);
    console.log(tableRows.value[0]);
  };

  return { sortTableBy, tableRows, tableHeaderColumns };
};

export default useTable;
