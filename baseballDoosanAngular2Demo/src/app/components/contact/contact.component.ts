import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserOpsService } from '../../services/user-ops.service';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstname : String;
  lastname : String;
  email : String;
  zipcode : String;
  state : String;
  states: any;
  result : boolean;
  constructor(private http: Http, private userService: UserOpsService, private formValidate: ValidationService) {
    this.result = undefined;
  }

  ngOnInit() {
    this.userService.getAllStates().subscribe(res => {
      this.states = res;
    });
  }

  onValidateFirstName(firstname){
    let character_only_regex = /^[a-zA-Z]+$/;
    return character_only_regex.test(firstname);
  }

  onValidateLastName(lastname){
    let character_hyphen_apostrophe_regex = /^[a-zA-Z'-]+$/;
    return character_hyphen_apostrophe_regex.test(lastname);
  }
  onValidateEmail(email){
    let email_regex = /\w+[\w-\.]*@\w+((-\w+)|(\w*))\.[a-z]{2,4}/g;
    return email_regex.test(email);
  }

  onValidateZipCode(zipcode){
    let zipcode_regre = /^[0-9]\d{0,5}$/g;
    return zipcode_regre.test(zipcode);
  }

  formSubmit(){
    let user = {
      firstname : this.firstname,
      lastname : this.lastname,
      email : this.email,
      zipcode : this.zipcode,
      USstate : this.state
    };
    this.userService.CreateContact(user).subscribe(res => {
      if(res.success){
        console.log("submitted");
        this.result = res.success;
        this.removeContent();
      }else{
        alert("error occurs " + res.msg);
        this.result = res.success;
        this.removeContent();
      }
    });
  }

  removeContent(){
    setTimeout(()=>{
      this.result = undefined;
      this.firstname = undefined;
      this.lastname = undefined;
      this.email = undefined;
      this.zipcode = undefined;
      this.state = undefined;
    },2000);
  }

}
