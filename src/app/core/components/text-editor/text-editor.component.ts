import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.sass'],
})
export class TextEditorComponent implements OnInit {
  @Output() textEmit: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('divMessages', { read: ElementRef })
  private divMessages!: ElementRef;

  selectedText: string = '';
  text: string = '';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('window:keydown.enter', ['$event.target.innerHTML'])
  onKeyPressHandler() {
    let p = this.renderer.createElement('p');
    let text = this.renderer.createText(
      this.divMessages.nativeElement.innerHTML
    );
    this.renderer.appendChild(p, text);
  }

  selectText() {
    this.selectedText = window.getSelection()!.toString();
  }
}
