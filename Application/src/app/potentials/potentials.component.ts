import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeadsInfoService } from '../Services/leads-info.service';
import { Lead } from '../Interfaces/lead';

@Component({
  selector: 'app-potentials',
  templateUrl: './potentials.component.html',
  styleUrls: ['./potentials.component.scss']
})
export class PotentialsComponent implements OnInit {

  public leadId: string = "";
  public allLeads?: Lead[];
  public allPotentials?: any[];
  public error500: boolean = false;
  public error404: boolean = false;
  public countSuccess: number = 0;

  constructor(private _ActivatedRoute:ActivatedRoute, private _LeadsInfoService: LeadsInfoService) { }

  ngOnInit(): void {
    // get lead_id variable from current route
    this._ActivatedRoute.params.subscribe(params => {
      this.leadId = params['lead_id']
      console.log(this.leadId) //log the value of lead id
    });

    // load data here that we need
    this.loadData()
  }

  loadData() {
    // get all leads
    this.getAllLeads();

    // now fetch from api all potential_ids 
    this.getAllPotentials(this.leadId);

  }

  // we need to get all potentials & all leads then make intersect between them with speciefic condition 
  getAllPotentials(leadId: string) {
    return this._LeadsInfoService.getAllPotentials(leadId).subscribe({
      next: (res) => {
        this.allPotentials = res;
        console.log("potentials from here is ");
        console.log(this.allPotentials?.length);
        this.countSuccess ++;
        if(this.countSuccess == 2) {
          this.error500 = false;
          this.error404 = false;
          $('.loading').fadeOut(1000);
        }
      },
      error: (err) => {
        console.log(err);
        this.countSuccess = 0;
        if(err.status == 500) {
          this.error500 = true;
        } else if (err.status == 404) {
          this.error404 = true;
        }
        $('.loading').fadeOut(1000);
      }
    })
  }

  getAllLeads() {
    return this._LeadsInfoService.getAllLeads().subscribe({
      next: (res) => {
        this.allLeads = res;
        console.log(this.allLeads);
        this.countSuccess++;
        if(this.countSuccess == 2) {
          this.error500 = false;
          this.error404 = false;
          $('.loading').fadeOut(1000);
        }
      },
      error: (err) => {
        console.log(err)
        if(err.status == 500) {
          this.error500 = true;
        } else if(err.status == 404) {
          this.error404 = true;
        }
        this.countSuccess = 0;
        $('.loading').fadeOut(1000);
      }
    })
  }

  // then we need th
  updateLeadInfo(lead: Lead, pid: any) {
      return this._LeadsInfoService.updateLeadInfo(lead, pid).subscribe({
      next: (res) => {
        // we need here to update page without refresh, so we call again getAllLeads() to update allLeads[]
        this.getAllLeads();
        $('.loading').fadeOut(1000);
      },
      error: (err) => {
        console.log(err)
        if(err.status == 500) {
          this.error500 = true;
        } else if(err.status == 404) {
          this.error404 = true;
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
