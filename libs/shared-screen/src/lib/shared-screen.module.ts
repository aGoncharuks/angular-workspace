import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedScreenDefaultService } from './shared-screen-default.service';
import { SharedScreenRootComponent } from './shared-screen-root/shared-screen-root.component';
import { SHARED_SCREEN_SERVICE } from './shared-screen.interface';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: SharedScreenRootComponent}
    ])
  ],
  providers: [
    {
      provide: SHARED_SCREEN_SERVICE,
      useClass: SharedScreenDefaultService
    }
  ],
  declarations: [SharedScreenRootComponent]
})
export class SharedScreenModule {}
