import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receber-param',
  templateUrl: './receber-param.component.html',
  styleUrls: ['./receber-param.component.css']
})
export class ReceberParamComponent implements OnInit {

  variavel1!:string
  variavel2!:string 

  constructor( 
    private route: ActivatedRoute
  ) { } 

  ngOnInit(): void {
    console.log("params", this.route.snapshot.paramMap);
    this.variavel1=this.route.snapshot.paramMap.get('info1')
    this.variavel2=this.route.snapshot.paramMap.get('dado2')
    console.log("info1",this.variavel1);
    console.log("dado2", this.variavel2);
    
  }

}
