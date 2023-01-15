import { defineStore } from "pinia";
import { ReportsDataItem, ReportsList } from "~/types";
import { useFetch } from "#app";

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
    async setReports() {
      const result = await fetch("report-dates.json");
      const data = await result.json();
      this.reportsList = data;
    },
  },
  getters: {
    getReports: (state: ReportsList) => state.reportsList,
  },
});
