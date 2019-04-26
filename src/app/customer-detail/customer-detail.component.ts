import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-customer-detail",
  templateUrl: "./customer-detail.component.html",
  styleUrls: ["./customer-detail.component.css"]
})
export class CustomerDetailComponent implements OnInit {
  customerDetail = { firstName: "a", lastName: "b", address: "c", age: 20 };

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.getCustomerDetail(id);
  }

  getCustomerDetail = id => {
    this.api.getOneCustomers(id).subscribe(
      data => {
        this.customerDetail = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  };

  updateCustomer = () => {
    this.api.updateCustomer(this.customerDetail).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  };
}
