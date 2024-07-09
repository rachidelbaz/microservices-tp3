import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DatePipe, DecimalPipe, JsonPipe, NgFor, NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [HttpClientModule, NgIf, NgFor, JsonPipe, DatePipe, DecimalPipe],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit{
  orderDetails:any;
  orderId!:number;
  constructor(private http:HttpClient, private router:Router,private route:ActivatedRoute) {
    this.orderId=route.snapshot.params['orderId'];
  }
  ngOnInit(): void {
    this.http.get(`http://localhost:8888/BILLING-SERVICE/fullBill/${this.orderId}`).subscribe({
      next : (data)=>{
        this.orderDetails=data;
      },
      error : (err)=>{}
    })
  }

}
