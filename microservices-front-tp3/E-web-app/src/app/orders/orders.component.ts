import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    HttpClientModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  orders:any;
  customerId!:number;

  constructor(private http:HttpClient, private router: Router, private route:ActivatedRoute) {
  this.customerId= route.snapshot.params['customerId'];
  }

  ngOnInit(): void {
    this.http.get(`http://localhost:8888/BILLING-SERVICE/bills/search/buCustomerId?projection=fullOrder&customerId=${this.customerId}`)
      .subscribe({
        next : (data)=>{
          this.orders=data;
        },
        error : (err)=>{}
      });
  }

  getOrdersDetails(o: any) {
  this.router.navigateByUrl("/order-details/"+o.id);
  }
}
