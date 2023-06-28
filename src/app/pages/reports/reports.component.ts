import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { UserModel } from '../auth/user.model';
import { Report } from "./reports.model";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
})
export class ReportsComponent implements OnInit {
  reportData$!: Report[];
  technicians$ = new Array<UserModel>();

  startDate!: Date;
  endDate!: Date;
  userId = 0;
  completed!: boolean;
  totalAmount = 0;

  constructor(private reportsService: ReportsService) {}

  ngOnInit(): void {
    this.reports();
    this.technicians();
  }

  reports() {
    this.reportsService
      .getReports(this.completed, this.startDate, this.endDate, +this.userId)
      .subscribe(
        (res) => {
          this.reportData$ = res.data;
          this.totalAmount = res.totalAmount;
        },
      );
  }

  technicians() {
    this.reportsService.getTechnicians().subscribe(
      (res) => (this.technicians$ = res.data)
    );
  }
}
