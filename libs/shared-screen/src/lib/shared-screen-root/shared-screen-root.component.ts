import { Component, Inject, OnInit } from '@angular/core';
import { SharedScreenData } from '@desk/api-interface';
import { Observable } from 'rxjs';
import { SHARED_SCREEN_SERVICE, SharedScreenService } from '../shared-screen.interface';

@Component({
  selector: 'desk-shared-screen-root',
  templateUrl: './shared-screen-root.component.html',
  styleUrls: ['./shared-screen-root.component.scss']
})
export class SharedScreenRootComponent implements OnInit {
  data$: Observable<SharedScreenData> = this.sharedScreenService.sharedScreenData$;

  constructor(@Inject(SHARED_SCREEN_SERVICE) private sharedScreenService: SharedScreenService) { }

  ngOnInit() {
  }

}
