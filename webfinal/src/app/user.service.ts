import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserService {
  isloggedin:boolean=false;
  loggeduser:any;
  userlist:any[];
  constructor(private http: HttpClient) { }
  // getUsers():Observable<User[]>{
  //   this.userlist = USERS;
  //   return of(this.userlist);
  // }
  // addUser(user:User):void{
  //   this.userlist.push(user);
  // }
  
  getDiets():Observable<any[]>{
    return this.http.get<any[]>('/api/diets');
  }
  getDietsByUser(user:any):Observable<any[]>{
    const url = '/api/'+user.username+'/myDiets'
    return this.http.get<any[]>(url);
  }
  addDiet(user:any,diet:any){
    const url = '/api/'+user.username+'/addDiet'
    return this.http.put(url,diet);
  }
  deleteDiet(user:any,diet:any){
    const url = '/api/'+user.username+'/deleteDiet' 
    return this.http.put(url,diet);
  }
  // getAll() :Observable<any[]>{
  //   return this.http.get<any[]>('/api/users');
  // }

  // getById(id: number):Observable<any> {
  //   return this.http.get('/api/users/' + id);
  // }

  create(user: any){
    return this.http.post('/api/users', user);
  }
  login(email:string, password: string) {
    const url = ('/api/authenticate/email='+email+'&password='+password)
    return this.http.get<any>(url);
}

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.isloggedin = false;
      this.loggeduser = null;
  }
}
