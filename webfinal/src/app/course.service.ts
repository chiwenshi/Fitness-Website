import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { StringifyOptions } from 'querystring';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CourseService {
  result:any[];
  constructor(private http: HttpClient) {}
    addCourse(user:any,course:any){
      const url = '/api/'+user.username+'/addCourse'
      return this.http.put(url,course);
    }
    deleteCourse(user:any,course:any){
      const url = '/api/'+user.username+'/deleteCourse'
      return this.http.put(url,course);
    }
    getCoursesByUser(user:any):Observable<any[]>{
      const url = '/api/'+user.username+'/myCourses'
      return this.http.get<any[]>(url);
    }
    getCategory():Observable<any[]>{
      return this.http.get<any[]>('/api/categories');
    }
    getCourses():Observable<any[]>{
      return this.http.get<any[]>('/api/courses');
    }
    getCoursesByCategory(category:String):Observable<any[]>{
      const url='/api/category='+category+'/courses';
      return this.http.get<any[]>(url);
    }
    // getUserCourses(username:String):Observable<Course[]>{
    //   return this.http.get<Course[]>('api/web');
    // }
    getCourseById(id:number):Observable<any>{
      const url = '/api/course/'+id;
      return this.http.get<any>(url);
    }
    getRateByCourseId(id:number):Observable<any>{
      const url = '/api/courserate/'+id;
      return this.http.get<any>(url);
    }
    addRatedByCourseId(id:number,rate:any){
      const url = '/api/'+id+'/addRate/'+rate;
      return this.http.get(url);
    }
}
