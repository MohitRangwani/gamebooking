import { Game } from './game.model';
import { Injectable } from '@angular/core';
import { Providers } from './providers.model';
import { ProviderService } from './providers.service';
@Injectable()
export class GameService{
  game1: Game;
  game2:Game;
  game3: Game;
  game4 : Game;
  game5 : Game;

  bandraProvider1Games : Game[]=[];
  bandraProvider2Games : Game[]=[];
  bandraProvider3Games : Game[]=[];
  andheriProvider1Games : Game[]=[];
  andheriProvider2Games : Game[]=[];
  dadarProvider1Games : Game[]=[];
  dadarProvider2Games : Game[]=[];
  dadarProvider3Games : Game[]=[];
  constructor(public providerService : ProviderService){
      this.game1=new Game(1 , "Table Tennis" , 70);
      this.game2=new Game(2 , "Bowling" ,150);
      this.game3=new Game(3 , "Snooker" , 100);
      this.game4=new Game(4 , "Foosball" , 50);
      this.game5=new Game(4 , "8 Ball Pool" , 120);
      
      this.bandraProvider1Games.push(this.game1);
      this.bandraProvider1Games.push(this.game2);
      this.bandraProvider1Games.push(this.game3);
      this.bandraProvider2Games.push(this.game1);
      this.bandraProvider2Games.push(this.game4);
      this.bandraProvider2Games.push(this.game5);
      this.bandraProvider3Games.push(this.game2);
      this.bandraProvider3Games.push(this.game3);
      this.bandraProvider3Games.push(this.game4);
      this.bandraProvider3Games.push(this.game5);

      this.andheriProvider1Games.push(this.game1);
      this.andheriProvider1Games.push(this.game3);
      this.andheriProvider1Games.push(this.game4);
      this.andheriProvider2Games.push(this.game1);
      this.andheriProvider2Games.push(this.game2);
      this.andheriProvider2Games.push(this.game3);
      this.andheriProvider2Games.push(this.game4);
      this.andheriProvider2Games.push(this.game5);

      this.dadarProvider1Games.push(this.game1);
      this.dadarProvider1Games.push(this.game3);
      this.dadarProvider1Games.push(this.game5);
      this.dadarProvider2Games.push(this.game2);
      this.dadarProvider2Games.push(this.game3);
      this.dadarProvider2Games.push(this.game4);
      this.dadarProvider3Games.push(this.game1);
      this.dadarProvider3Games.push(this.game2);
      this.dadarProvider3Games.push(this.game5);
      this.dadarProvider3Games.push(this.game3);
  }
  selectedGames : Game[]=[];
  selectedProvider : String;
  getGames() : Game[] {
    this.selectedProvider=this.providerService.selectProvider.name;
    if(this.selectedProvider.localeCompare("Bandra Provider 1")== 0 ){
      this.selectedGames=this.bandraProvider1Games;
    }
    if(this.selectedProvider.localeCompare("Bandra Provider 2")== 0 ){
      this.selectedGames=this.bandraProvider2Games;
    }
    if(this.selectedProvider.localeCompare("Bandra Provider 3")== 0 ){
      this.selectedGames=this.bandraProvider3Games;
    }
    if(this.selectedProvider.localeCompare("Andheri Provider 1")== 0 ){
      this.selectedGames=this.andheriProvider1Games;
    }
    if(this.selectedProvider.localeCompare("Andheri Provider 2")== 0 ){
      this.selectedGames=this.andheriProvider2Games;
    }
    if(this.selectedProvider.localeCompare("Dadar Provider 1")== 0 ){
      this.selectedGames=this.dadarProvider1Games;
    }
    if(this.selectedProvider.localeCompare("Dadar Provider 2")== 0 ){
      this.selectedGames=this.dadarProvider2Games;
    }
    if(this.selectedProvider.localeCompare("Dadar Provider 3")== 0 ){
      this.selectedGames=this.dadarProvider3Games;
    }
    return this.selectedGames;
  }
}