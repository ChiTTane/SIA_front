import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculService } from '../_services/calcul.service';

@Component({
  selector: 'app-duree',
  templateUrl: './duree.component.html',
  styleUrls: ['./duree.component.css']
})
export class DureeComponent implements OnInit {
  errorMessage:string[]=[]
  successMessage:string[]=[]
  duree = 0;
  formData : FormGroup = new FormGroup({
    annuitee:new FormControl(0,[Validators.required]),
    taux:new FormControl(0,[Validators.required]),
    capital:new FormControl(0,[Validators.required])
  })
  valid: boolean=false;

  constructor(private calculService:CalculService) { }

  ngOnInit(): void {
  }
  submitDuree(){
    this.valid=false;

    this.errorMessage=[]
    this.successMessage=[]

    if(this.formData.value.capital <= 0 || this.formData.value.taux<=0 || this.formData.value.annuitee<=0){
      this.errorMessage.push("Select a value other than 0")
      return;
    }


    if(this.formData.valid){
       this.valid=true;

      this.successMessage.push("Form has been filed successfully")
      this.calculService.calculDuree(this.formData.value.capital,this.formData.value.taux,this.formData.value.annuitee).subscribe(data =>{
        this.duree = Math.round(data.duree)
      })
    }else {
      this.errorMessage.push("The form is invalid, please fill up all inputs.")
    }
  }

}
