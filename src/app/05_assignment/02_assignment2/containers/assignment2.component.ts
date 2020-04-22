import { Component } from '@angular/core';
import { AssignmentComponent } from '../../assignment.component';
import { Observable, of, Subject, Subscription, forkJoin } from 'rxjs';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})




export class Assignment2Component {
  constructor(private atService: AssignmentComponent) {}

  characters: Observable<any[]>;
  columns: string[];
  setClickedRow: Function;
  selectedRow: Number;
  ngOnInit() {

    this.columns = this.atService.getColumns();
    this.characters = this.atService.getCharacters();
    this.setClickedRow = function(index) {
    this.selectedRow = index;
    };
  }
}

  


