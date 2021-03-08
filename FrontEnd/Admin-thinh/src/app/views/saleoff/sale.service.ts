import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment'
import{course} from'../../_models/course'

const baseUrl = `${environment.apiSale}/getcourse`;

@Injectable({
  providedIn: "root",
})
export class SaleoffService {
  ApiUrl = "https://6018d45a971d850017a4049c.mockapi.io/api/getcourse";
  constructor(private http: HttpClient) {}

  // getAll(): Observable<any> {

  //   return this.http.get(this.ApiUrl);
  // }
  // postCousre(course): Observable<any> {
  //   return this.http.post(this.ApiUrl,course);
  // }
  // update(course): Observable<any> {
  //   return this.http.put(this.ApiUrl,course);
  // }
  // deleteCourse(id:number):Observable<any>{
  //   return this.http.delete(`${this.ApiUrl}/${id}`)
  // }
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  add(course:any):Observable<any>{
    return this.http.post(baseUrl, course);
  }

  updateCourse(course: any):Observable<any>{
    return this.http.put(`${baseUrl}/${course.id}`, course);
  }

  deleteCourse(id:number):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
