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
  teamOne!: Team;
  teamTwo!: Team;

  team1: FormControl = new FormControl();
  team2: FormControl = new FormControl();

  constructor(private service: TeamService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((response) => {
      this.teams = response;
    });
  }

  getTeam(id: number) {
    if (id == 1) {
      this.service.findById(this.team1.value).subscribe((response) => {
        this.teamOne = response;
      });
    } else {
      this.service.findById(this.team1.value).subscribe((response) => {
        this.teamTwo = response;
      });
    }
  }

  getValue() {
    console.log(this.teamOne.name);
    console.log(this.teamTwo.name);
  }

  drop(event: CdkDragDrop<Players[]>) {
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
