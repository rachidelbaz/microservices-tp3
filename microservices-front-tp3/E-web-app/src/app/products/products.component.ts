import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
    imports: [HttpClientModule, NgIf, NgForOf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products : any;
  constructor(private http:HttpClient) {
  }
  ngOnInit(): void{
    this.http.get("http://localhost:8888/INVENTORY-SERVICE/products?projection=fullProduct").subscribe({
   next : (data)=>{
   this.products=data;
   },
      error : (err)=>{}
    }
    )
  }
}
