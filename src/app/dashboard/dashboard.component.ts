import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  customers = [
    {
      id: 1,
      name: "Jane"
    },
    {
      id: 2,
      name: "Paul"
    },
    {
      id: 3,
      name: "Ruby"
    }
  ];
  newUser = { firstName: "", lastName: "", address: "", age: 0 };

  constructor(private api: ApiService) {
    this.getAllCustomers();
  }

  ngOnInit() {}

  getAllCustomers = () => {
    this.api.getAllCustomers().subscribe(
      data => {
        this.customers = data;
      },
      error => {
        console.log(error);
      }
    );
  };

  createCustomer = () => {
    this.api.createCustomer(this.newUser).subscribe(
      data => {
        this.customers.push(data);
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  };

  deleteCustomer = id => {
    this.api.deleteCustomer(id).subscribe(
      data => {
        //this.customers.push(data);
        this.getAllCustomers();
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  };
}
