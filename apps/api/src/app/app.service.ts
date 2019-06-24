import { Injectable } from "@nestjs/common";
import { Message, SharedScreenData } from '@desk/api-interface';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: "Welcome to api!" };
  }
  
  getSharedScreenData(): SharedScreenData {
    return {
      items: [
        'shared screen item 1',
        'shared screen item 2'
      ]
    };
  }
}
