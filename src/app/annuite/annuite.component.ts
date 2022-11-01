import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CalculService } from '../_services/calcul.service';

@Component({
  selector: 'app-annuite',
  templateUrl: './annuite.component.html',
  styleUrls: ['./annuite.component.css']
})
export class AnnuiteComponent implements OnInit {
  errorMessage:string[]=[]
  successMessage:string[]=[]
  annuitee = 0;
  valid=false;
  formD:any=null;
  formData : FormGroup = new FormGroup({
    capital:new FormControl(0,[Validators.required]),
    taux:new FormControl(0,[Validators.required]),
    duree:new FormControl(0,[Validators.required])
  })
  constructor(private calculService:CalculService) { }

  ngOnInit(): void {
    // console.log(environment.cities)
    
  }
  submitAnnuitee(){
    console.log("test")
    this.valid=false;
    this.errorMessage=[]
    this.successMessage=[]
    if(this.formData.value.capital <= 0 || this.formData.value.taux<=0 || this.formData.value.duree<=0){
      this.errorMessage.push("Select a value other than 0")
      return;
    }

    if(this.formData.valid){
      this.successMessage.push("Form has been filed successfully")

      this.valid=true;
      // capital:number,taux:number,duree:number
      this.calculService.calculAnnuitee(this.formData.value.capital,this.formData.value.taux,this.formData.value.duree).subscribe(data =>{
        this.annuitee = data.annuitee
        console.log("test")
        this.formD = {   
          capital:this.formData.value.capital,
          taux:this.formData.value.taux,
          duree:this.formData.value.duree,
          annuitee:data.annuitee,
          showForm:true
        }
      })
    }else {
      this.errorMessage.push("The form is invalid, please fill up all inputs.")
    }
  }


}
