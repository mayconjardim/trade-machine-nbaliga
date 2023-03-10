import { Players } from 'src/app/models/player';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';

import { TeamService } from './../../services/team.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'trade-machine',
  templateUrl: './trade-machine.component.html',
  styleUrls: ['./trade-machine.component.scss'],
})
export class TradeMachineComponent implements OnInit {
  teams!: Team[];
  team1Form: FormControl = new FormControl();
  team2Form: FormControl = new FormControl();
  team1!: Team;
  team2!: Team;

  playersTeam1!: Players[];
  playersTeam2!: Players[];

  capSpace: number = 101962352;

  playerImg = 'assets/images/players/';
  png = '.png';
  error = 'assets/images/players/blank.png';

  constructor(private service: TeamService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((response) => {
      this.teams = response;
    });
  }

  getTeam(id: number) {
    if (id == 1) {
      this.service.findById(this.team1Form.value).subscribe((response) => {
        this.team1 = response;
        this.playersTeam1! = response.players!;
      });
    } else {
      this.service.findById(this.team2Form.value).subscribe((response) => {
        this.team2 = response;
        this.playersTeam2! = response.players!;
      });
    }
  }

  getCapRoom(id: number): number {
    let capRoom = 0;
    if (id == 1) {
      this.team1.players?.forEach((x) => {
        capRoom += x.contract1;
      });
    } else {
      this.team2.players?.forEach((x) => {
        capRoom += x.contract1;
      });
    }
    if (capRoom > this.capSpace) {
      return this.capSpace - capRoom;
    } else return capRoom;
  }

  ratingColors(rating: string) {
    switch (rating) {
      case 'A+':
        return 'assets/images/utils/aa.png';
      case 'A':
        return 'assets/images/utils/a.png';
      case 'B':
        return 'assets/images/utils/b.png';
      case 'C':
        return 'assets/images/utils/c.png';
      case 'D':
        return 'assets/images/utils/d.png';
      default:
        return 'assets/images/utils/f.png';
    }
  }

  getPosition(position: number) {
    switch (position) {
      case 5:
        return 'PG';
      case 4:
        return 'SG';
      case 3:
        return 'SF';
      case 2:
        return 'PF';
      default:
        return 'C';
    }
  }

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
