import {Tile} from './Tile';
import {TileState} from './TileState';
import {Router} from '@angular/router';


class Playground implements Tile {

  revealed = false;
  isShip: boolean;

  constructor(ship: boolean) {
    this.isShip = ship;
  }

  getTileState(): TileState {
    if (!this.revealed) {
      return TileState.HIDDEN;
    } else if (this.isShip) {
      return TileState.SHIP;
    } else {
      return TileState.WATER;
    }
  }
}

export class GameState {

  private shipsThatHaveCeasedLiving = 0;
  private ships = 4;
  public grid: Playground[][] = [[
    new Playground(true),
    new Playground(true),
    new Playground(true),
    new Playground(true),
    new Playground(false),
    new Playground(false),
    new Playground(false),
    new Playground(false),
    new Playground(false),
    new Playground(false),
    new Playground(false),
    new Playground(false),
    new Playground(false),
    new Playground(false),
    new Playground(false),
    new Playground(false),
  ]];

  getGrid(): Tile[][] {
    return this.grid;
  }

  reveal(shot: Tile): void {
    (shot as Playground).revealed = true;
    if ((shot as Playground).isShip) {
      this.shipsThatHaveCeasedLiving++;
      this.win();
    }
  }

  private win(): void {
    if (this.shipsThatHaveCeasedLiving >= this.ships) {
      this.shipsThatHaveCeasedLiving = 0;
      for (const row of this.grid) {
        for (const state of row) {
          state.revealed = true;
        }
      }
      this.restore();
    }
  }

  private restore(): void {
    this.shipsThatHaveCeasedLiving = 0;
    for (const row of this.grid) {
      for (const state of row) {
        state.revealed = false;
      }
    }
  }
}
