import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name: string;
  constructor(private _dataShare: DataShareService) {
    this._dataShare.subject.subscribe((res) => {
      this.name = res;
    });
  }

  ngOnInit() {}
  changeName(mName) {
    this._dataShare.subject.next(mName.value);
  }
}
