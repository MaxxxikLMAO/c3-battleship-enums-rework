import {Component, OnInit} from '@angular/core';
import {GameState} from './GameState';
import {TileState} from './TileState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mybattleship';
  gameState = new GameState();

  hidden = TileState.HIDDEN;
  water = TileState.WATER;
  ship = TileState.SHIP;
}
