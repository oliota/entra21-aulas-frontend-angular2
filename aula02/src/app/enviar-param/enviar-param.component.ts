import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviar-param',
  templateUrl: './enviar-param.component.html',
  styleUrls: ['./enviar-param.component.css'],
})
export class EnviarParamComponent implements OnInit {
  param1: string;
  param2: string;
  constructor(
    private router: Router
    ) {}

  ngOnInit(): void {}
  chamarComponent() { 
      this.router.navigate(['/receber', this.param1, this.param2]); 
  }
}
