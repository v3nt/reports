import { defineStore } from "pinia";
import { ReportsDataItem, ReportsList } from "~/types";

export const useReportsStore = defineStore("reports", {
  state: () => {
    return {
      reportsList: [
        {
          companyName: "",
          lastReportingDate: "",
          lastReportingPeriod: "",
          nextReportingDate: "",
          nextReportingInferred: false,
        },
      ],
    };
  },
  actions: {
    async setReports(filterNameInput: string) {
      const result = await fetch("http://localhost:3000/report-dates.json");
      const data = await result.json();
      // filtering whole data but could search server with filterNameInput value
      this.reportsList = filterNameInput
        ? data
            .filter((e: ReportsDataItem) =>
              e.companyName.includes(filterNameInput.toLowerCase())
            )
            .map((e: ReportsDataItem) => {
              return { ...e };
            })
        : data;
    },
  },
  getters: {
    getReports: (state: ReportsList) => state.reportsList,
  },
});
