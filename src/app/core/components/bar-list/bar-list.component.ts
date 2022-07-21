import { BarList } from './../../../types/barList';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.sass'],
})
export class BarListComponent implements OnInit {
  barList: BarList[] = [
    { name: 'undo', icon: 'undo' },
    { name: 'bold', icon: 'bold' },
    { name: 'italic', icon: 'italic' },
    { name: 'underline', icon: 'underline' },
    { name: 'left', icon: 'left' },
    { name: 'right', icon: 'right' },
    { name: 'center', icon: 'center' },
    { name: 'color', icon: 'palette' },
  ];

  constructor() {}

  ngOnInit(): void {}

  trackByBarList(index: number) {
    return this.barList ? this.barList[index] : 0;
  }
}
