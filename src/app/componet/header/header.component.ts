import { Component, OnInit } from '@angular/core';
@Component({
  //seletor
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public bntInicio : String = 'Inicio';

  constructor() { }

  ngOnInit(): void {
  }

}
