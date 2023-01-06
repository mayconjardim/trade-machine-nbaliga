import { Players } from './players';

export interface Team {
  id?: number;
  name: string;
  capSpace: number;
  players: Players[];
}
