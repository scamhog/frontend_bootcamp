import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  faMagnifyingGlass,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent<T extends Record<keyof T, string | number>> {
  faMagnifyingGlass: IconDefinition = faMagnifyingGlass;
  @Output('listFiltered')
  listFilteredEmmiter: EventEmitter<Array<T>> = new EventEmitter();
  @Input()
  listToFilter: T[] = [];
  @Input() field!: keyof T;
  searchbarQuery: string = '';

  constructor() {}

  queryChange() {
    this.listFilteredEmmiter.emit(
      this.listToFilter.filter((item) =>
        (item[this.field] as string).includes(this.searchbarQuery)
      )
    );
  }
}
