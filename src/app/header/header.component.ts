import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() activeLinkChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelect(route: string) {
    this.activeLinkChanged.emit(route);
  }
}
