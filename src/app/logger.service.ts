import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }


  log(message: string) {
    console.log(
      '%c[ROOT LOGGER]',
      'background: green; color: #fff',
       message
    );
  }

}
