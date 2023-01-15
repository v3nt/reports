import { ReportsDataItem, ReportsList, TableHeaderList } from "~/types";
import { ref } from "#build/imports";
import { computed } from "@vue/reactivity";

const useTable = (rows: ReportsDataItem[], headerColumns: TableHeaderList) => {
  const tableHeaderColumns = ref(headerColumns);

  const tableRows = ref(rows);
  const setSortIndex = ref<number>(0);

  const sortSetting = (colId: string, sortOrder: string, i: number) => {
    tableHeaderColumns.value[setSortIndex.value]["sort"] = "";
    setSortIndex.value = i;
    if (sortOrder === "") {
      tableHeaderColumns.value[i]["sort"] = "ASC";
    } else if (sortOrder === "ASC") {
      tableHeaderColumns.value[i]["sort"] = "DESC";
    } else if (sortOrder === "DESC") {
      tableHeaderColumns.value[i]["sort"] = "";
    } else {
      tableHeaderColumns.value[i]["sort"] = "ASC";
    }
  };

  const sortTableBy = (colId: string, sort: string, i: number): void => {
    // tableRows.value = tableRows.value.reverse();
    let tableRowsNewOrder = tableRows.value as ReportsDataItem[];
    console.log(colId, "sort", sort);

    tableRows.value = tableRowsNewOrder.sort(function (a, b) {
      var keyA = new Date(a[colId]),
        keyB = new Date(b[colId]);
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });

    sortSetting(colId, sort, i);

    if (sort === "DESC") {
      // tableRowsNewOrder.reverse();
    }

    console.log(colId);
    console.log(tableRows.value[0]);
  };

  return { sortTableBy, tableRows, tableHeaderColumns };
};

export default useTable;
