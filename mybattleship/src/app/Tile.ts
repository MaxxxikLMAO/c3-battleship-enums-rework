import {TileState} from './TileState';

export interface Tile {
  getTileState(): TileState;
}
