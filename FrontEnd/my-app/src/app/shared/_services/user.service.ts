import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Plan } from '../_models/plan.model';
import { SalesLog } from '../_models/saleslog.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  getAgent(id: number) {
    return this.http.get(`${this.apiUrl}/api/v1/users/agents/${id}/`);
  }

  // remember:not implementing full crud because of limited functionality and clutter
  getAllPlans() {
    return this.http.get<Array<Plan>>(`${this.apiUrl}/api/v1/plans/`);
  }

  getAllLogs() {
    return this.http.get<Array<SalesLog>>(`${this.apiUrl}/api/v1/sales-logs`);
  }
  createLogs(log: SalesLog) {
    return this.http.post(`${this.apiUrl}/api/v1/sales-logs/`, {log});
  }
  updateLogs(uuid: string, log: SalesLog) {
    return this.http.put(`${this.apiUrl}/api/v1/sales-logs/${uuid}/`, {log});
  }
  partUpdateLogs(uuid: string, log: SalesLog) {
    return this.http.patch(`${this.apiUrl}/api/v1/sales-logs/${uuid}/`, {log});
  }
}
