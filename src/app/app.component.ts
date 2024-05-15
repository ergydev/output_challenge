import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CreateOnomatopiaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'output_challenge';

  onomatopoeiaList: string[] = [
    'Bam',
    'Boom',
    'Crash',
    'Kaboom',
    'Pow',
    'Smash',
    'Whack',
  ];

  onReiceveNewOnomatopia(newOnomatopia: string): void {
    this.onomatopoeiaList.push(newOnomatopia);
  };
}
