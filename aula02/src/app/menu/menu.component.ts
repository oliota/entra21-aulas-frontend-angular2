import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links:any=new Array();

  constructor() { }

  ngOnInit(): void {
    this.links.push({title:"pagina",route:"pagina"})
    this.links.push({title:"outro",route:"outro"})
    this.links.push({title:"property",route:"property"})
    this.links.push({title:"event",route:"event"})
    this.links.push({title:"twoWay",route:"twoWay"})
    this.links.push({title:"Enviar param component",route:"enviar"})
    this.links.push({title:"Receber param link",params:['/receber', 'primeiro dado','segundo dado']})
    this.links.push({title:"Ver componente diretivaIf",route:  'diretivaIf'})
    this.links.push({title:"Ver componente diretivaFor",route:  'diretivaFor'})
  }

}
