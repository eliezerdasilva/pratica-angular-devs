import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private nome: String;
  //caso o atributo for privado o html nao consegue acessar
  public titulo: String = 'Ola mundo';
  title = 'projeto';
  // ela carrega por primeiro ao carregar a tela
  ngOnInit(): void {
    console.log('Hello word');
    this.calculoMedia(10, 15, 10);
    this.verificaString("devs2blu");
    this.verificaString("devs3blu");
    const montante : number= this.calculaJuros(500,0.5,5)
    console.log(montante);

  }
  funcao(): void {
    const variavel: number = 10;
    const texto: String = 'texto';
    console.log('Botao clicado');
  }
  private converter(dado: number) {}
  private calculoMedia(numUm: number, numDois: number, numTres: number): void {
    const media: number = numDois + numTres + numUm;
    console.log(media);
  }
  //Crie um método chamado verificaString onde é passado uma string, verifique quantos caracteres possui, e verifique se é igual a “devs2blu”

  private verificaString(texto: String): void {
    const tamanho = texto.length;
    console.log(tamanho);
    if (texto === 'devs2blu') {
      console.log("A string possui 8 caracteres e é igual a 'devs2blu'.");
    } else {
      console.log('São diferentes');
    }
  }
  //Crie um método chamado calculaJuros que aceite três parâmetros: 
  //o valor principal (capital), a taxa de juros (em porcentagem) e o número de meses.
  // O método deve calcular e imprimir o montante total após os juros compostos 
  private calculaJuros(capital:number, taxaJuros:number,numMeses:number):number{
      const soma : number = ((1+ taxaJuros)**numMeses)*capital;
   return soma;
  }
}
