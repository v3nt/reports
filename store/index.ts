import { defineStore } from "pinia";
import { ReportsDataItem, ReportsList } from "~/types";
import useReportDates from "~/composables/useReportDates";

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
          lastReportingDateUnix: "",
          lastReportingPeriodUnix: "",
          nextReportingDateUnix: "",
        },
      ],
    };
  },
  actions: {
    async setReports(filterNameInput: string) {
      const { convertDates } = useReportDates();
      // filtering whole data but could search server with filterNameInput value
      const result = await fetch("http://localhost:3000/report-dates.json");
      const data = await result.json();
      const dataWithUnixTs = data.map((e: ReportsDataItem) => {
        return {
          ...e,
          lastReportingDateUnix: convertDates(e.lastReportingDate),
          lastReportingPeriodUnix: convertDates(e.lastReportingPeriod),
          nextReportingDateUnix: e.nextReportingDate,
        };
      });
      this.reportsList = filterNameInput
        ? dataWithUnixTs
            .filter((e: ReportsDataItem) =>
              e.companyName.includes(filterNameInput.toLowerCase())
            )
            .map((e: ReportsDataItem) => {
              return { ...e };
            })
        : dataWithUnixTs;
    },
  },
  getters: {
    getReports: (state: ReportsList) => state.reportsList,
  },
});
