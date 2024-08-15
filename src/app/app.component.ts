import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './models/character';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular-noModule';

  //  data  [];

  constructor(private apiService: ApiService,){}

  response$: Observable<Character> | undefined;
  characters: Character[] = [];

  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      this.characters = data;
      console.log(data)
    });
  
    // this.apiService.getData().subscribe(console.log)
  }

}
// 