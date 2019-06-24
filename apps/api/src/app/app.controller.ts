import { Controller, Get } from "@nestjs/common";

import { Message, SharedScreenData } from '@desk/api-interface';

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello")
  getData(): Message {
    return this.appService.getData();
  }
  
  @Get("shared-screen-data")
  getSharedScreenData(): SharedScreenData {
    return this.appService.getSharedScreenData();
  }
}
