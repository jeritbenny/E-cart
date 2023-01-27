import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartarray:any=[];
  cartlist=new BehaviorSubject([]);
  grand:Number=0;
 

  constructor() { }
  
  addcart(product:any){
    this.cartarray.push(product);
    this.cartlist.next(this.cartarray)
    console.log(this.cartlist);
    //calling grand total
    let total=this.gettotal();
    console.log(total);
    
  }
  //total price
  gettotal(){
    var grandsum=0;
    this.cartarray.map((item:any)=>{
      grandsum+=item.price
    })
    return grandsum;
  }
  //remove item from cart
  removecart(product:any){
    this.cartarray.map((item:any,index:any)=>{
    if(product.id==item.id){
      this.cartarray.splice(index,1);
    }
    })
    this.cartlist.next(this.cartarray)//remove and upadate
  }

  removeitem(product:any){
    this.cartarray.removecart(product)
    this.grand=this.cartarray.gettotal()
  }
  //remove all
  removeall(){
    this.cartarray=[];
    this.cartlist.next(this.cartarray)
  }
}


