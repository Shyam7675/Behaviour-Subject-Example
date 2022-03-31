import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  name: string;
  constructor(private _dataShare: DataShareService) {
    this._dataShare.subject.subscribe((res) => {
      this.name = res;
    });
  }

  ngOnInit() {}
  changeName(sName) {
    this._dataShare.subject.next(sName.value);
  }
}
