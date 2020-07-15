import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

games = [];
selectedGame : Game;
selectedProvider :String;
  constructor(gameService : GameService,public router:Router) {
    this.games=gameService.getGames();
    this.selectedProvider=gameService.selectedProvider;
   }

  ngOnInit(): void {
  
  }
  back(){
    this.router.navigate(['/providers']);
  }

}
