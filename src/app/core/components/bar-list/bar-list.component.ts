import { BarList } from './../../../types/BarList';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.sass'],
})
export class BarListComponent implements OnInit {
  @Input() barList: BarList[] = [
    { name: 'undo', icon: 'admin' },
    { name: 'bold', icon: 'admin' },
    { name: 'italic', icon: 'admin' },
    { name: 'underline', icon: 'admin' },
    { name: 'left', icon: 'admin' },
    { name: 'right', icon: 'admin' },
    { name: 'center', icon: 'admin' },
    { name: 'color', icon: 'admin' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
