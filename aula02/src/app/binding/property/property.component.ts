import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  imagem:string = "https://yt3.ggpht.com/ytc/AAUvwnh8uSXNsEBqViI4hmRIRGfdVngmV4Tc1r-sM4xqKQ=s176-c-k-c0x00ffffff-no-rj"

  nome:string = "Rubem";

  idade:number= 33;


  constructor() { }

  ngOnInit(): void {
  }

}
