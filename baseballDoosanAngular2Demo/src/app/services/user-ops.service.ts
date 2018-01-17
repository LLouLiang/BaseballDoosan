import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserOpsService {

  user : any;
  constructor(private http:Http) { }
  CreateContact(user){
    let header = new Headers();
    header.append('Content-Type','application/json');
    let result = this.http.post('http://localhost:4000/baseballapi/addUser',user,{headers : header} ).map( res => res.json());
    return result;
  }

  getAllStates(){
    let header = new Headers();
    header.append('Content-Type','application/json');
    return this.http.get('./assets/States.json',{headers : header}).map((res:Response) => res.json());
  }
}
