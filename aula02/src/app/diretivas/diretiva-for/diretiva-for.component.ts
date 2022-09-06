import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-for',
  templateUrl: './diretiva-for.component.html',
  styleUrls: ['./diretiva-for.component.css']
})
export class DiretivaForComponent implements OnInit {

  nomes!:Array<string>
  nome!:string
  constructor() { }

  ngOnInit(): void {
    this.nomes=new Array()
    this.nomes.push("Rubem")
    this.nomes.push("Duarte")
    this.nomes.push("Oliota")
  }

  add(){
    if(this.nome){

      this.nomes.push(this.nome) 
      this.nome=""
    }
  }

  deletar(index:number){
    this.nomes.splice(index,1)
  }

}
