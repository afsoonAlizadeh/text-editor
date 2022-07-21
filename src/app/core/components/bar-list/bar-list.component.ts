import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { BarList } from 'src/app/types/BarList';

@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.sass'],
})
export class BarListComponent implements OnInit {
  @Input() selectedText: string = '';
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

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  trackByBarList(index: number) {
    return this.barList ? this.barList[index] : 0;
  }

  onAction(action: string) {
    switch (action) {
      case 'undo':
        break;
      case 'bold':
        this.boldCommand();
        break;
      case 'italic':
        break;
      case 'underline':
        break;
      case 'left':
        break;
      case 'right':
        break;
      case 'center':
        break;
      case 'color':
        break;
    }
  }
  boldCommand() {
    let strong = this.renderer.createElement('strong');
    let text = this.renderer.createText(this.selectedText || '');
    this.renderer.appendChild(strong, text);
    debugger;
  }
}
