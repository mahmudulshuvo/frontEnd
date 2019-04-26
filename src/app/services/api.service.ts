import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseURL = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<any> {
    return this.http.get(this.baseURL + "/customer/", {
      headers: this.httpHeaders
    });
  }

  getOneCustomers(id): Observable<any> {
    return this.http.get(this.baseURL + "/customer/" + id + "/", {
      headers: this.httpHeaders
    });
  }
  updateCustomer(customer): Observable<any> {
    const body = {
      firstName: customer.firstName,
      lastName: customer.lastName,
      address: customer.address,
      age: customer.age
    };
    return this.http.put(
      this.baseURL + "/customer/" + customer.id + "/",
      body,
      {
        headers: this.httpHeaders
      }
    );
  }

  createCustomer(customer): Observable<any> {
    const body = {
      firstName: customer.firstName,
      lastName: customer.lastName,
      address: customer.address,
      age: customer.age
    };
    return this.http.post(this.baseURL + "/customer/", body, {
      headers: this.httpHeaders
    });
  }

  deleteCustomer(id): Observable<any> {
    return this.http.delete(this.baseURL + "/customer/" + id + "/", {
      headers: this.httpHeaders
    });
  }
}
