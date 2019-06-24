import { MatProgressSpinnerModule, MatTabsModule } from '@angular/material';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayServerDataComponent } from './display-server-data/display-server-data.component';


const appRoutes: Routes = [
  {
    path: 'display-server-data',
    component: DisplayServerDataComponent
  },
  {
    path: 'shared-screen',
    loadChildren: () => import('@desk/shared-screen').then(module => module.SharedScreenModule)
  }
];


@NgModule({
  declarations: [AppComponent, DisplayServerDataComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, MatTabsModule, MatProgressSpinnerModule,
    RouterModule.forRoot(appRoutes, {
        initialNavigation: 'enabled'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
