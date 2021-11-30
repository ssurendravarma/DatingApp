import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public accountService:AccountService,
    public router:Router,
    private toastr:ToastrService) { }
model:any={};
//loggedIn:boolean;
  ngOnInit(): void {
   // this.getCurrentUser();
  }
  login(){
    this.accountService.login(this.model).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl('/members')
      //this.loggedIn=true
    },error=>{console.log(error);
    this.toastr.error(error.error);
    
    })
  }
logout(){
  this.accountService.logout();
  this.router.navigateByUrl("/");
  //this.loggedIn=false;
}
//getCurrentUser(){
//  this.accountService.currentUser$.subscribe(
//    user=>{this.loggedIn=!!user},error=>{
//      console.log(error);
//    }
//  )
//}
}
