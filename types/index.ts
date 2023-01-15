export interface ReportsDataItem {
  companyName: string;
  lastReportingDate: string;
  lastReportingPeriod: string;
  nextReportingDate: string;
  nextReportingInferred?: boolean;
}

export interface ReportsList {
  reportsList: ReportsDataItem[] | null;
}

export interface TableHeaderItem {
  title: string;
  id: string;
}

export interface TableHeaderList extends Array<TableHeaderItem> {}
