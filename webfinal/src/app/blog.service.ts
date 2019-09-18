import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BlogService {

  constructor(private http:HttpClient) { }
  getBlog():Observable<any[]>{
    return this.http.get<any[]>('/api/blog');
  }
  getBlogDetails(id:number){
    var url = '/api/'+id+'/detail';
    return this.http.get(url);
  }
  addBlogByUser(user:any,blog:any){
    var url = '/api/'+user.username+'/addBlog';
    return this.http.put(url,blog);
  }
}
