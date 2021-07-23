import { Component, OnInit, Input } from '@angular/core';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() initial: boolean = true;
  faSearch = faSearch;
  faBell = faBell;
  faUser = faUser;

  items: string[] = ['Clima', 'Suelo'];
  constructor() {

  }

  ngOnInit(): void {
  }

}
