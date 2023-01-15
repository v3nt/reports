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

// interface ReportsData extends Array<ReportsDataItem>{}
