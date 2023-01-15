export interface ReportsDataItem {
  companyName: string;
  lastReportingDate: string;
  lastReportingPeriod: string;
  nextReportingDate: string;
  nextReportingInferred?: boolean;
}

export interface ReportsList {
  reportsList: ReportsDataItem[];
}

export interface TableHeaderItem {
  title: string;
}

export interface TableHeaderList extends Array<TableHeaderItem>;