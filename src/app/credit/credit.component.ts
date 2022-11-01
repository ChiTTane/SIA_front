import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']

})

export class CreditComponent implements OnInit, AfterViewInit {
  formD: any
  @Input() data: any;
  showForm: boolean = false
  errorMessage: String[] = []
  successMessage: String[] = []
  formUser: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*$'), Validators.minLength(5), Validators.maxLength(15)]),
    prenom: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*$'), Validators.minLength(5), Validators.maxLength(15)]),
    adresse: new FormControl('', [Validators.required]),
    ville: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*$'), Validators.minLength(3), Validators.maxLength(15)]),
    tel: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
    mail: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")]),

  })

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  ngAfterViewInit() {

  }
  submitUser() {
    console.log(this.data)
    console.log(this.formUser)
    this.errorMessage = []
    this.successMessage = []


    if (this.formUser.valid) {
      this.successMessage.push("Form has been filed successfully")
      this.formD = {
        nom: this.formUser.value.nom,
        prenom: this.formUser.value.prenom,
        email: this.formUser.value.mail,
        tel: this.formUser.value.tel,
        ville: this.formUser.value.ville,
        adresse: this.formUser.value.adresse,
        capital: this.data.capital,
        duree: this.data.duree,
        annuitee: this.data.annuitee,
        taux: this.data.taux,
      }
      console.log(this.data)
      // capital:number,taux:number,duree:number

      this.userService.register(this.formD).subscribe(data => {
        console.log(data)
        if (data.errorMessage) {
          this.errorMessage.push(data.errorMessage)
        }
        if (data.succesMessage) {
          this.successMessage.push(data.succesMessage)
          this.formUser.reset()
          this.data = false;
        }


      })
    } else {
      this.errorMessage.push("The form is invalid, please fill up all inputs with the correct format.")
    }
  }

}
