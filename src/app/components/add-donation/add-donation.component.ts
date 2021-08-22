import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { entityList } from '../../models/entity-kind'
import { currencyList } from '../../models/currency-type'
import { donation } from 'src/app/models/donation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.css']
})
export class AddDonationComponent implements OnInit {
  addForm: FormGroup;
  currencyList: any[] = currencyList;
  entityList: any[] = entityList;
  donationObj: donation = new donation();
  donationList: donation[] = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
    private router: Router) {
    this.addForm = this.formBuilder.group({
      currencyTypeCode: ['', Validators.required],
      entityName: [Validators.pattern('[a-zA-Zא-ת  ]+'), Validators.required],
      sum: [Validators.pattern('[0-9]+'), Validators.required],
      entityKindCode: ['', Validators.required],
      donationPurpose: [Validators.pattern('[a-zA-Zא-ת  ]+'), Validators.required],
      forex: [Validators.pattern('[+-]?([0-9]*[.])?[0-9]+'), Validators.required],
      donationConditions: []
    });

  }
  getErrorMessage() {
    return  'שדה חובה, יש להזין ערך תקין';
  }
  ngOnInit(): void {
    this.donationObj.associationCode = 1;
    //כאשר תמומש הזדהות ישמר קוד העמותה ב
    //loaclstorage 
    //וילקח משם עם כל יצירת אוביקט חדש

  }

  clear() {
    this.addForm.reset();
  }
  addDonation() {
    if (this.addForm.valid)
      this.http.post<any[]>(`${environment.apiUrl}/api/Association/AddDonation`, this.donationObj).subscribe(data => {
        this.donationList = data;
        this.router.navigate(["List"]);
      })
  }

}