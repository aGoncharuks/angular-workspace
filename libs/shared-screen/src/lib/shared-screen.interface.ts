import { InjectionToken } from '@angular/core';
import { SharedScreenData } from '@desk/api-interface';
import { Observable } from 'rxjs';

export const SHARED_SCREEN_SERVICE = new InjectionToken<SharedScreenService>('sharec.screen.service');

export interface SharedScreenService {
  sharedScreenData$: Observable<SharedScreenData>
}
