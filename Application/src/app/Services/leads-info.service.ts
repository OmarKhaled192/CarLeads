import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lead } from '../Interfaces/lead';

@Injectable({
  providedIn: 'root'
})
export class LeadsInfoService {

  private baseUrl: string = "http://localhost:3000";

  constructor(private _HttpClient: HttpClient) { }
  
  getAllLeads() :Observable<Lead[]>
  {
    return this._HttpClient.get<Lead[]>(`${this.baseUrl}/api/leads`) ;
  }
  
  getAllPotentials(lead_id: string) :Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/leads/${lead_id}/potential-duplicates`) ;
  }

  updateLeadInfo(lead: Lead, pid: any) : Observable<Lead> {
    return this._HttpClient.put<Lead>(`${this.baseUrl}/api/leads/${lead.lead_id}`, {
      ...lead,
      duplicate_of: pid,
    });
  }
}
