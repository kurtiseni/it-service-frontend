export interface ReportsInterface {
    data: Report[];
    totalAmount: number;
}

export class ReportsModel {
  completed!: boolean | undefined;
  startDate!: Date | undefined;
  endDate!: Date | undefined;
  userId!: number | undefined;

  constructor(
    completed: boolean | undefined,
    startDate: Date | undefined,
    endDate: Date | undefined,
    userId: number | undefined
  ) {
    this.completed = completed;
    this.startDate = startDate;
    this.endDate = endDate;
    this.userId = userId;
  }
}

export interface Report {
  date:         Date;
  username:     string;
  brand:        string;
  price:        number;
  repairStatus: boolean;
  orderID:      number;
}
