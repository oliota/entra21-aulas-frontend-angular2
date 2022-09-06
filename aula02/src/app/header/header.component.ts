import { Component, OnInit } from '@angular/core';
import { SegurancaService } from '../seguranca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private seguranca:SegurancaService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  sair():void{
    this.seguranca.logged=false;
    this.router.navigateByUrl("")
  }
}
  