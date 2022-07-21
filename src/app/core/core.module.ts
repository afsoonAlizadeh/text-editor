import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { BarListComponent } from './components/bar-list/bar-list.component';
import { IconModule } from '../icon/Icon.module';
@NgModule({
  declarations: [TextEditorComponent, BarListComponent],
  imports: [CommonModule, IconModule],
  exports: [BarListComponent],
})
export class CoreModule {}
