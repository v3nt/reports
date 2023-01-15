import { defineStore } from "pinia";
import { ReportsList } from "~/types";

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
      const result = await fetch("http://localhost:3000/report-dates.json");
      const data = await result.json();
      this.reportsList = data;
    },
  },
  getters: {
    getReports: (state: ReportsList) => state.reportsList,
  },
});
