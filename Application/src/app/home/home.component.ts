import { Component, OnInit } from '@angular/core';
import { LeadsInfoService } from '../Services/leads-info.service';
import { Lead } from '../Interfaces/lead';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public allLeads!: Lead[];

  constructor(private _LeadsInfoService:LeadsInfoService) { }

  ngOnInit(): void {
    this.getAllLeads();
  }

  getAllLeads() {
    return this._LeadsInfoService.getAllLeads().subscribe({
      next: (res) => {
        this.allLeads = res;
        console.log(this.allLeads); // for test
      },
      error: (err) => {
        console.log(err); // for test
      }
    })
  }
}
