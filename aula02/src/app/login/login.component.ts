import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SegurancaService } from '../seguranca.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login!:string
  senha!:string
  constructor( 
    private seguranca:SegurancaService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.seguranca.logged=false
  }

  entrar():void{
    console.log(this.login,this.senha);
    
    if(this.login=="adm" && this.senha=="123"){
 
      this.seguranca.logged=true;
      this.router.navigateByUrl('/inicio')
    }
  }

}
