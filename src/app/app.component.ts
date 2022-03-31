import { Component, VERSION } from '@angular/core';
import { DataShareService } from './data-share.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name : string;
  constructor(private _dataShare : DataShareService){
    this._dataShare.subject.subscribe(res => {
      this.name = res;
    })
  }

}
