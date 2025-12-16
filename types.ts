export interface AuditRecord {
  id: number;
  serialNo: number;
  isPrepaid: '是' | '否';
  technician: string;
  technicianUid: string;
  dispatcher: string;
  source: string;
  orderNo: string;
  status: string; // e.g., '申请' (Applied/Pending)
  totalCollection: number;
  cost: number;
  performance: number;
  completionIncome: number;
  appTime: string;
  auditTime: string;
  auditor: string;
  auditRemarks: string;
  suppAmount: number;
  suppStatus: string;
}

export interface FilterState {
  startDate: string;
  endDate: string;
  dispatcher: string;
  technician: string;
  technicianUid: string;
  orderNo: string;
  orderSource: string;
  isPrepaid: string;
  isSuppPayment: string;
  status: string;
}