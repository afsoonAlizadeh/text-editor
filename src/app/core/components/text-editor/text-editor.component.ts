import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.sass'],
})
export class TextEditorComponent implements OnInit {
  @ViewChild('divMessages', { read: ElementRef })
  private divMessages!: ElementRef;

  text: string = '';
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  @HostListener('window:keydown.enter', ['$event.target.innerHTML'])
  onKeyPressHandler() {
    // debugger;
    let p = this.renderer.createElement('p');
    // this.renderer.appendChild(p, event.target.innerHTML);
    this.renderer.appendChild(this.divMessages.nativeElement, p);
  }
}
