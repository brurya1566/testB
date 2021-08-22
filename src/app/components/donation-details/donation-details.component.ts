import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { currencyList } from 'src/app/models/currency-type';
import { donation } from 'src/app/models/donation';
import { donationEdit } from 'src/app/models/donation-edit';
import { entityList } from 'src/app/models/entity-kind';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'donation-details',
  templateUrl: './donation-details.component.html',
  styleUrls: ['./donation-details.component.css']
})
export class DonationDetailsComponent implements OnInit {
@Input() donationObj:donationEdit = new donationEdit();
@Input() disabled:any;
donationList:donation[] =[];
editForm: FormGroup;
  currencyList: any[] = currencyList;
  entityList: any[] = entityList;

  constructor(private http: HttpClient,private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router) {
      this.editForm = this.formBuilder.group({
        currencyTypeCode: ['', Validators.required],
        entityName: [Validators.pattern('^[a-zA-Zא-ת  ]*$'), Validators.required],
        sum: [Validators.pattern('[0-9]+'), Validators.required],
        entityKindCode: ['', Validators.required],
        donationPurpose: ['', Validators.required],
        forex: [Validators.pattern('[+-]?([0-9]*[.])?[0-9]+'), Validators.required],
        donationConditions: []
      });

     }

  ngOnInit(): void {
    if(this.donationObj.readonly)
    this.editForm.disable();
  }
  clear() {
    this.editForm.reset();
  }
  editDonation() {
    if (this.editForm.valid)
      this.http.post<any[]>(`${environment.apiUrl}/api/Association/EditDonation`, this.donationObj).subscribe(data => {
        this.donationList = data;
        this.router.navigate(["List"]);
      })
  }

}
