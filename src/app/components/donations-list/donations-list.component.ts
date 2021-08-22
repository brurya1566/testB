import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { donation } from 'src/app/models/donation';
import { Router, ActivatedRoute } from '@angular/router';
import { donationEdit } from 'src/app/models/donation-edit';


@Component({
  selector: 'app-donations-list',
  templateUrl: './donations-list.component.html',
  styleUrls: ['./donations-list.component.css']
})
export class DonationsListComponent implements OnInit {
  donationList: donationEdit[] = [];
  panelOpenState = false;
  disabledObj: boolean = true;

  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.http.get<donationEdit[]>(`${environment.apiUrl}/api/Association/GetDonationsList`).subscribe(data => {
      this.donationList = data;

    })
  }
  addDonation() {
    this.router.navigate(["Add"]);
  }
  openEditor(obj:donationEdit) {
    obj.readonly = false;
    obj.edit=true;
    //מטפל באפשרות של עריכת האוביקט
  }
  deleteObj(obj:donation){
    //אמור לבצע קריאת http
    //לא מומש היות ולא היה בדרישות
  }
  readonly(obj:donationEdit){
    if(!obj.edit)
    obj.readonly=true;
  }

}
