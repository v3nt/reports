export interface ReportsDataItem {
  companyName: string;
  lastReportingDate: string;
  lastReportingPeriod: string;
  nextReportingDate: string;
  nextReportingInferred?: boolean;
  lastReportingDateUnix: string;
  lastReportingPeriodUnix: string;
  nextReportingDateUnix: string;
}

export interface ReportsList {
  reportsList: ReportsDataItem[] | null;
}

export interface TableHeaderItem {
  title: string;
  id: string;
  sort?: string;
}

export interface TableHeaderList extends Array<TableHeaderItem> {}
