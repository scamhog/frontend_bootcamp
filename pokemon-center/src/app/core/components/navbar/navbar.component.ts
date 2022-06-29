import { Component, OnInit } from '@angular/core';
import {
  faMagnifyingGlass,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  faMagnifyingGlass: IconDefinition = faMagnifyingGlass;

  constructor() {}

  ngOnInit(): void {}
}
