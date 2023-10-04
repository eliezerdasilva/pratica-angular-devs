import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //criar um vetor(Objeto)
  public listaDeTarefas: string[] = ['Cozinhar', 'ler'];

  

  constructor() {}
  ngOnInit(): void {}
}
