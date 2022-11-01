import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculService } from '../_services/calcul.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {
  errorMessage:string[]=[]
  successMessage:string[]=[]
  capital = 0;
  valid=false;

  formData : FormGroup = new FormGroup({
    annuitee:new FormControl(0,[Validators.required]),
    taux:new FormControl(0,[Validators.required]),
    duree:new FormControl(0,[Validators.required])
  })
  constructor(private calculService:CalculService) { }

  ngOnInit(): void {
  }
  submitCapital(){
    this.errorMessage=[]
    this.successMessage=[]
    this.valid=false;
    
    if(this.formData.value.annuite <= 0 || this.formData.value.taux<=0 || this.formData.value.duree<=0){
      this.errorMessage.push("Select a value other than 0")
      return;
    }
    if(this.formData.valid){
    this.valid=true;

      this.successMessage.push("Form has been filed successfully")
      // annuitee:number,taux:number,duree:number
      this.calculService.calculCapital(this.formData.value.annuitee,this.formData.value.taux,this.formData.value.duree).subscribe(data =>{
        this.capital = data.capital
      })
    }else {
      this.errorMessage.push("The form is invalid, please fill up all inputs.")
    }
  }

}
