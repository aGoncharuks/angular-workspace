import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedScreenRootComponent } from './shared-screen-root/shared-screen-root.component';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: SharedScreenRootComponent}
    ])
  ],
  declarations: [SharedScreenRootComponent]
})
export class SharedScreenModule {}
