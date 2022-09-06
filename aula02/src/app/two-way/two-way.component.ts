import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css'],
})
export class TwoWayComponent implements OnInit {
  constructor() {}

  cidade: string = 'Blumenau';

  ngOnInit(): void {}

  emitirAlerta(mensagem: string) {
    alert(mensagem);
  }
}
