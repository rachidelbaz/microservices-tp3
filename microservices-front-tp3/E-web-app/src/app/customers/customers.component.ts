import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgFor, NgIf} from "@angular/common";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [HttpClientModule, NgIf, NgFor],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{
  customers : any;
  constructor(private http:HttpClient,private route:Router) {
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8888/CUSTOMER-SERVICE/customers?projection=fullCustomer").subscribe({

      next : (data)=>{
        this.customers = data;
    },
      error : (err)=>{}
  }
    );


  }

  getOrders(c: any) {
   this.route.navigateByUrl("/orders/"+c.id);
  }
}
