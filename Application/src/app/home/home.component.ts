import { Component, OnInit } from '@angular/core';
import { LeadsInfoService } from '../Services/leads-info.service';
import { Lead } from '../Interfaces/lead';
import * as $ from 'jquery'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public allLeads?: Lead[];
  public error500: boolean = false;

  constructor(private _LeadsInfoService:LeadsInfoService) { }

  ngOnInit(): void {
    this.getAllLeads();
  }

  getAllLeads() {
    return this._LeadsInfoService.getAllLeads().subscribe({
      next: (res) => {
        this.allLeads = res;
        console.log(this.allLeads);
        this.error500 = false;
        $('.loading').fadeOut(1000);
      },
      error: (err) => {
        $('.loading').fadeOut(1000);
        console.log(err);
        if (err.status == 500) {
          this.error500 = true;
        }  
      }
    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    $('.loading').fadeIn(0)
  }
 

}
