import { Component, EventEmitter, Output } from '@angular/core';
import {
  faMagnifyingGlass,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent {
  faMagnifyingGlass: IconDefinition = faMagnifyingGlass;

  @Output('searchQeury')
  searchQueryChange: EventEmitter<string> = new EventEmitter();

  searchbarQuery: string = '';

  constructor() {}

  queryChange() {
    this.searchQueryChange.emit(this.searchbarQuery);
  }
}
