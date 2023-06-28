import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../pages/auth/user.model';
import { ReportsInterface, ReportsModel } from '../pages/reports/reports.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ReportsService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  getTechnicians(): Observable<UserInterface> {
    return this.get(`/users/group/1`);
  }

  getReports(
    completed?: boolean,
    startDate?: Date,
    endDate?: Date,
    userId?: number
  ): Observable<ReportsInterface> {
    const body = new ReportsModel(completed, startDate, endDate, userId);
    return this.post('/reports', body);
  }
}
