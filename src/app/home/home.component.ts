import { Component } from '@angular/core';
import confetti from 'canvas-confetti';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posX: number = 50;
  posY: number = 50;
  aceitou: boolean = false;
  mostrarFesta: boolean = false; // ✅ Controla a animação da festa
headerText: string = 'Quer namorar comigo?';

  moverBotao(event: MouseEvent | TouchEvent) {
    const botaoNao = event.target as HTMLElement;
    botaoNao.style.position = 'absolute';
    botaoNao.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
    botaoNao.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
  }
  aceitar() {
    this.aceitou = true;
  }
  startParty() {
    const duration = 5000; // 5 segundos
    const end = Date.now() + duration;
    
    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }
      
      confetti({
        particleCount: 10,
        spread: 160,
        origin: { x: Math.random(), y: Math.random() * 0.5 }
      });
    }, 200);
    this.headerText = "Boa escolha!!Eu te amo meu amorzinho ❤️❤️❤️❤️❤️" // ✅ Ativa a animação da festa
  }
}

