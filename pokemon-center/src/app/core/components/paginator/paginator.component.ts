import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
export class PaginatorComponent<T> implements OnInit {
  left: IconDefinition = faAngleLeft;
  right: IconDefinition = faAngleRight;
  start: IconDefinition = faAngleDoubleLeft;
  end: IconDefinition = faAngleDoubleRight;
  constructor() {}
  @Input()
  itemsPerPage: number = 20;
  @Input()
  itemsSorceList: any[] = [];
  itemsList: any[] = [];
  page: number = 1;
  @Output('setFrecuency')
  frequency: EventEmitter<number> = new EventEmitter();
  @Output('loadMore')
  loadMore: EventEmitter<void> = new EventEmitter();
  ngOnInit(): void {}

  itemsPPChange() {
    if (this.itemsSorceList.length >= this.itemsPerPage)
      this.frequency.emit(this.itemsPerPage);
  }

  resizePokemonsList() {
    this.itemsList = this.itemsSorceList.slice(
      (this.page - 1) * this.itemsPerPage,
      this.itemsPerPage * this.page
    );
  }

  changeLimit(newLimit: number) {
    this.itemsPerPage = newLimit;
    if (this.itemsSorceList.length < this.itemsPerPage) {
      this.loadMore.emit();
    } else this.resizePokemonsList();
  }

  async nextPage() {
    this.page += 1;
    if (this.itemsSorceList.length >= this.itemsPerPage * this.page)
      await this.loadMore.emit();
    this.resizePokemonsList();
  }

  prevtPage() {
    if (this.page > 0) this.page -= 1;
    this.resizePokemonsList();
  }
}
