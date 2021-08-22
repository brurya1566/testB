import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {
  @Input() controlType:any='';
  @Input() title:any;
  @Input() text:any;
  @Input() selectList:any=[];
  @Input() req:any='false';
  @Input() inputModel: any;
  @Input() formControlName1:string='';
  @Input() form:FormGroup;
  @Output() inputModelChange = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder,) { 
    this.form = this.formBuilder.group({
  });}

  ngOnInit(): void {
  }

}
