import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass'],
})
export class PaginatorComponent implements OnInit {
  left: IconDefinition = faAngleLeft;
  right: IconDefinition = faAngleRight;
  start: IconDefinition = faAngleDoubleLeft;
  end: IconDefinition = faAngleDoubleRight;
  constructor() {}
  itemsPerPage: number = 20;
  @Output('setFrecuency')
  frequency: EventEmitter<number> = new EventEmitter();
  ngOnInit(): void {}

  itemsPPChange() {
    this.frequency.emit(this.itemsPerPage);
  }
}
