import { ParsedEventType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import party from "party-js";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartitems:any=[];
grand:any;
updatedtotal:any;

  constructor(private cart:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cart.cartlist.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartitems=data;
        
      }
    )
    this.grand=this.cart.gettotal()
  }
removeitem(product:any){
 this.cart.removecart(product) 
 this.grand=this.cart.gettotal()

}

removeall(){
  this.cart.removeall()
}
discount3per(source:any){
 let discount=(this.grand*3)/100
this.updatedtotal=this.grand-discount
party.confetti(source)
}

discount30per(){
  let discount=(this.grand*30)/100
  this.updatedtotal=this.grand-discount
}

discount50per(){
  let discount=(this.grand*50)/100
  this.updatedtotal=this.grand-discount
}

discount60per(){
  let discount=(this.grand*60)/100
  this.updatedtotal=this.grand-discount
}
procced(){
  alert('your order is placed')
  this.router.navigateByUrl('')
}

}
