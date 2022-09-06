import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-if',
  templateUrl: './diretiva-if.component.html',
  styleUrls: ['./diretiva-if.component.css']
})
export class DiretivaIfComponent implements OnInit {

  nome!:string
  idade!:number
  constructor() { }

  ngOnInit(): void {
  }

  verificarNome():boolean{

    return(this.nome && this.nome.length>=5)
  }

  maiorIdade():boolean{
    return this.idade && this.idade>=18
  }

}
