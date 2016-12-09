
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HnApiService } from '../hn-api.service';

@Component({
  selector: 'app-itemcomments',
  templateUrl: './itemcomments.component.html',
  styleUrls: ['./itemcomments.component.scss']
})
export class ItemcommentsComponent implements OnInit {
  sub: any;
  item;

  constructor(
    private _hackerNewsAPIService: HnApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let itemID = +params['id'];
      this._hackerNewsAPIService.fetchComments(itemID).subscribe(data => {
        this.item = data;
      }, error => console.log('Could not load item' + itemID));
    });
  }
}