import { ReportsDataItem, TableHeaderList } from "~/types";
import { ref } from "@vue/reactivity";

const useTable = (rows: ReportsDataItem[], headerColumns: TableHeaderList) => {
  const tableHeaderColumns = ref(headerColumns);
  const tableRows = ref(rows);

  const setSortIndex = ref<number>(0);

  const sortSetting = (colId: string, sortOrder: string, i: number) => {
    tableHeaderColumns.value[setSortIndex.value]["sort"] = "";
    setSortIndex.value = i;

    if (setSortIndex.value > 0 && sortOrder === "DESC") {
      return (tableHeaderColumns.value[0]["sort"] = "ASC");
      setSortIndex.value = 0;
    }

    if (sortOrder === "") {
      return (tableHeaderColumns.value[i]["sort"] = "ASC");
    } else if (sortOrder === "ASC") {
      return (tableHeaderColumns.value[i]["sort"] = "DESC");
    } else if (sortOrder === "DESC") {
      return (tableHeaderColumns.value[i]["sort"] = "");
    } else if (sortOrder === "") {
      return (tableHeaderColumns.value[0]["sort"] = "ASC");
    } else {
      return (tableHeaderColumns.value[i]["sort"] = "ASC");
    }
  };

  const sortTableBy = (colId: string, sort: string, i: number): void => {
    const newSortOrder = sortSetting(colId, sort, i);
    tableRows.value = tableRows.value.sort(function (a: any, b: any) {
      let x = a[`${colId}Unix`] ? a[`${colId}Unix`] : a[colId];
      let y = b[`${colId}Unix`] ? b[`${colId}Unix`] : b[colId];
      if (x > y) {
        return newSortOrder === "DESC" ? -1 : 1;
      }
      if (x < y) {
        return newSortOrder === "DESC" ? 1 : -1;
      }
      return 0;
    });
  };

  return {
    sortTableBy,
    tableRows,
    tableHeaderColumns,
  };
};

export default useTable;
